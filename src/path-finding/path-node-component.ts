import * as ex from "excalibur";

export class PathNodeComponent<T = any> extends ex.Component {
    static type = 'path-node' as const;
    readonly type = 'path-node' as const;
    pos = ex.vec(0, 0);
    constructor(pos: ex.Vector) {
        super();
        this.pos = pos;
    }

    gScore = Infinity;
    hScore = Infinity;
    weight = 1;
    isWalkable = true;
    data?: T;
    direction: ex.Vector = ex.Vector.Zero;

    connections: PathNodeComponent<T>[] = [];

    previousNode: PathNodeComponent<T> | null = null;
}