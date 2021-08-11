import { FlatMeasurements } from './flat-measurements';
import {OwnerName} from "../../owners/model/owner-name";
import {Bill} from "../../bills/model/bill";

export class Flat {

    private readonly _id: number;
    private _flatNumber: number;
    private _blockNumber: number;
    private _floor: number;
    private _flatMeasurements: FlatMeasurements;
    private _bills: Bill[] = [];
    private _ownersNames: OwnerName[];

    constructor(id: number, flatNumber: number, blockNumber: number, floor: number,
                flatMeasurements: FlatMeasurements, bills: Bill[], ownersNames: OwnerName[]) {
        this._id = id;
        this._flatNumber = flatNumber;
        this._blockNumber = blockNumber;
        this._floor = floor;
        this._flatMeasurements = flatMeasurements;
        this._bills = bills;
        this._ownersNames = ownersNames;
    }

    public get id(): number {
        return this._id;
    }

    public get flatNumber(): number {
        return this._flatNumber;
    }

    public get blockNumber(): number {
        return this._blockNumber;
    }

    public get floor(): number {
        return this._floor;
    }

    public get flatMeasurements(): FlatMeasurements {
        return this._flatMeasurements;
    }

    public get bills(): Bill[] {
        return this._bills;
    }

    public get ownersNames(): OwnerName[] {
        return this._ownersNames;
    }

    public set flatNumber(flatNumber: number) {
        this._flatNumber = flatNumber;
    }

    public set blockNumber(blockNumber: number) {
        this._blockNumber = blockNumber;
    }

    public set floor(floor: number) {
        this._floor = floor;
    }

    public set flatMeasurements(flatMeasurements: FlatMeasurements) {
        this._flatMeasurements = flatMeasurements;
    }

    public set bills(bills: Bill[]) {
        this._bills = bills;
    }

    public set ownersNames(ownersNames: OwnerName[]) {
        this._ownersNames = ownersNames;
    }
}