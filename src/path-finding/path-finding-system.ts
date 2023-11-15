import * as ex from 'excalibur';
import { PathNodeComponent } from "./path-node-component";


export class PathFinder {
    query: ex.Query<PathNodeComponent>;

    constructor(scene: ex.Scene) {
        this.query = scene.world.queryManager.createQuery([PathNodeComponent.type]);
    }

    heuristicWeight = 1;
    heuristic: (start: PathNodeComponent, end: PathNodeComponent) => number = (start: PathNodeComponent, end: PathNodeComponent) => {
        // manhattan distance
        return Math.abs(start.pos.x - end.pos.x) + Math.abs(end.pos.y - end.pos.y);

        // euclidean distance
        // return start.pos.distance(end.pos);
    }

    private _buildPath(currentNode: PathNodeComponent) {
        const path: PathNodeComponent[] = [];
        while (currentNode.previousNode) {
            path.unshift(currentNode);
            currentNode = currentNode.previousNode;
        }
        path.unshift(currentNode);
        return path;
    }

    private _getRangeHelper(cell: PathNodeComponent, accum: PathNodeComponent[], range: number) {
        if (range >= 0) {
            accum.push(cell);
            cell.connections.forEach(cell => {
                this._getRangeHelper(cell, accum, range - 1)
            })
        }
    }

    getRange(start: PathNodeComponent, range: number): PathNodeComponent[] {
        let result: PathNodeComponent[] = [];
        this._getRangeHelper(start, result, range);
        // dedup results
        result = result.filter((val, index, array) => array.indexOf(val) === index);
        return result;
    }

    findPath(start: PathNodeComponent, end: PathNodeComponent): PathNodeComponent[] {
        const nodes = this.query.getEntities().map(n => n.get(PathNodeComponent)) as PathNodeComponent[];
        nodes.forEach(node => {
            node.gScore = 0;
            node.hScore = 0;
            node.previousNode = null;
        });

        start.gScore = 0;
        start.hScore = start.gScore + this.heuristic(start, end) * this.heuristicWeight;
        start.direction = ex.Vector.Down;

        const openNodes: PathNodeComponent[] = [start];
        const closedNodes: PathNodeComponent[] = [];

        while (openNodes.length > 0) {
            // priority queue, evaluate nodes with the lowest cost
            const priorityNodes = openNodes.sort((a, b) => {
                // tie breaking for aesthetics
                // if (a.hScore === b.hScore) {
                //     // console.log(b.direction.normalize());
                //     // console.log(a.direction.normalize());
                //     console.log(b.direction.dot(ex.Vector.Down) - a.direction.dot(ex.Vector.Down));
                //     return b.direction.dot(ex.Vector.Down) - a.direction.dot(ex.Vector.Down);
                //     // return b.pos.y - a.pos.y;
                // }
                return a.hScore - b.hScore;
            });

            // tie breaking for aesthetics
            const current = priorityNodes[0];

            // Done!
            if (current === end) {
                return this._buildPath(current);
            }

            // Remove current from the open node set
            const index = openNodes.indexOf(current);
            openNodes.splice(index, 1);
            closedNodes.push(current);


            // Find the neighbors that haven't been explored
            const neighbors = current.connections.filter(node => {
                return node.isWalkable;
            }).filter(node => {
                return closedNodes.indexOf(node) === -1;
            });

            // Current direction!
            let currentDirection = current.direction;

            neighbors.forEach((node) => {
                if (openNodes.indexOf(node) === -1) {
                    node.previousNode = current;
                    node.gScore = node.weight + current.gScore;
                    node.hScore = node.gScore + this.heuristic(node, end) * this.heuristicWeight;

                    // Turn penalty if direction is not straight
                    const newDirection = node.pos.sub(current.pos).normalize();
                    node.direction = newDirection;
                    const inline = currentDirection.dot(newDirection);
                    if (inline === 0.0) {
                        node.hScore += 130.0;
                    }

                    openNodes.push(node);
                }
            });
        }

        // error case
        return [];
    }
}