
export abstract class Player {
    private static _STARTING_BIT = 0b1 | 0;
    private static _CURRENT_GROUP = Player._STARTING_BIT;

    public readonly mask: number;
    constructor(public name: string) {
        this.mask = Player._CURRENT_GROUP = (Player._CURRENT_GROUP << 1) | 0;
    }

    /**
     * 
     * @returns true if done with turn, false if more moves to make
     */
    abstract makeMove(): Promise<boolean>;
}