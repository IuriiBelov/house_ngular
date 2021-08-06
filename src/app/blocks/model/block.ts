export class Block {

    private readonly _id: number;
    private _blockNumber: number;
    private _flatsNumbers: number[];

    constructor(id: number, blockNumber: number, flatsNumbers: number[]) {
        this._id = id;
        this._blockNumber = blockNumber;
        this._flatsNumbers = flatsNumbers;
    }

    public get id(): number {
        return this._id;
    }

    public get blockNumber(): number {
        return this._blockNumber;
    }

    public get flatsNumbers(): number[] {
        return this._flatsNumbers;
    }

    public set blockNumber(blockNumber: number) {
        this._blockNumber = blockNumber;
    }

    public set flatsNumbers(flatsNumbers: number[]) {
        this._flatsNumbers = flatsNumbers;
    }
}