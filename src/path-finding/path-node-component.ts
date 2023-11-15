import * as ex from "excalibur";

export class PathNodeComponent extends ex.Component {
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
    direction: ex.Vector = ex.Vector.Zero;

    connections: PathNodeComponent[] = [];

    previousNode: PathNodeComponent | null = null;
}