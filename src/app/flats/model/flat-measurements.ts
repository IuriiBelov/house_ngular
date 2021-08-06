export class FlatMeasurements {

    private _allArea: number;
    private _livingArea: number;

    constructor(allArea: number, livingArea: number) {
        this._allArea = allArea;
        this._livingArea = livingArea;
    }

    public get allArea(): number {
        return this._allArea;
    }

    public get livingArea(): number {
        return this._livingArea;
    }

    public set allArea(allArea: number) {
        this._allArea = allArea;
    }

    public set livingArea(livingArea: number) {
        this._livingArea = livingArea;
    }
}