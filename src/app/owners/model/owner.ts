import { OwnerName } from './owner-name';

export class Owner {

    private _id: number;
    private _ownerName: OwnerName;
    private _phoneNumber: string;
    private _flatsNumbers: number[];

    constructor(id: number, name: OwnerName, phoneNumber: string, flatsNumbers: number[]) {
        this._id = id;
        this._ownerName = name;
        this._phoneNumber = phoneNumber;
        this._flatsNumbers = flatsNumbers;
    }

    public get id(): number {
        return this._id;
    }

    public get name(): OwnerName {
        return this._ownerName;
    }

    public get phoneNumber(): string {
        return this._phoneNumber;
    }

    public get flatsNumbers(): number[] {
        return this._flatsNumbers;
    }

    public set name(name: OwnerName) {
        this._ownerName = name;
    }

    public set phoneNumber(phoneNumber: string) {
        this._phoneNumber = phoneNumber;
    }

    public set flatsNumbers(flatsNumbers: number[]) {
        this._flatsNumbers = flatsNumbers;
    }
}