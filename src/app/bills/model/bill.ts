import { BillStatus } from './bill-status';

export class Bill {

    private readonly _id: number;
    private _billNumber?: number;
    private _flatNumber?: number;
    private _date?: Date;
    private _billStatus?: BillStatus;

    constructor(id: number, billNumber?: number, flatNumber?: number, date?: Date,
                billStatus?: BillStatus) {
        this._id = id;
        this._billNumber = billNumber;
        this._flatNumber = flatNumber;
        this._date = date;
        this._billStatus = billStatus;
    }

    public get id(): number {
        return this._id;
    }

    public get flatNumber(): number {
        return this._flatNumber;
    }

    public get billNumber(): number {
        return this._billNumber;
    }

    public get date(): Date {
        return this._date;
    }

    public get billStatus(): BillStatus {
        return this._billStatus;
    }

    public set flatNumber(flatNumber: number) {
        this._flatNumber = flatNumber;
    }

    public set billNumber(billNumber: number) {
        this._billNumber = billNumber;
    }

    public set date(date: Date) {
        this._date = date;
    }

    public set billStatus(billStatus: BillStatus) {
        this._billStatus = billStatus;
    }
}