export class FlatMeasurements {

    private allArea: number;
    private livingArea: number;

    constructor(allArea: number, livingArea: number) {
        this.allArea = allArea;
        this.livingArea = livingArea;
    }

    public get getAllArea(): number {
        return this.allArea;
    }

    public get getLivingArea(): number {
        return this.livingArea;
    }

    public set setAllArea(allArea: number) {
        this.allArea = allArea;
    }

    public set setLivingArea(livingArea: number) {
        this.livingArea = livingArea;
    }
}