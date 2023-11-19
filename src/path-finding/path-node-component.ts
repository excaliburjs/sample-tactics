import * as ex from "excalibur";

export class PathNodeComponent<T = any> extends ex.Component {
    static type = 'path-node' as const;
    readonly type = 'path-node' as const;
    pos = ex.vec(0, 0);
    /**
     * Is this path node traversable by anything at all?
     */
    isWalkable = true;
    /**
     * Is this path node traversable by certain things
     */
    walkableMask: number =  -1; // 32-bit mask
    constructor(pos: ex.Vector) {
        super();
        this.pos = pos;
    }

    gScore = Infinity;
    hScore = Infinity;
    weight = 1;
    data?: T;
    direction: ex.Vector = ex.Vector.Zero;

    connections: PathNodeComponent<T>[] = [];

    previousNode: PathNodeComponent<T> | null = null;
}