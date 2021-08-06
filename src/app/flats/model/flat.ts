import { FlatMeasurements } from './flat-measurements';
import {OwnerName} from "../../owners/model/owner-name";

export class Flat {

    private readonly id: number;
    private flatNumber: number;
    private blockNumber: number;
    private floor: number;
    private flatMeasurements: FlatMeasurements;
    private ownersNames: OwnerName[];

    constructor(id: number, flatNumber: number, blockNumber: number, floor: number,
                flatMeasurements: FlatMeasurements, ownersNames: OwnerName[]) {
        this.id = id;
        this.flatNumber = flatNumber;
        this.blockNumber = blockNumber;
        this.floor = floor;
        this.flatMeasurements = flatMeasurements;
        this.ownersNames = ownersNames;
    }

    public get getId(): number {
        return this.id;
    }

    public get getFlatNumber(): number {
        return this.flatNumber;
    }

    public get getBlockNumber(): number {
        return this.blockNumber;
    }

    public get getFloor(): number {
        return this.floor;
    }

    public get getFlatMeasurements(): FlatMeasurements {
        return this.flatMeasurements;
    }

    public get getOwnersNames(): OwnerName[] {
        return this.ownersNames;
    }

    public set setFlatNumber(flatNumber: number) {
        this.flatNumber = flatNumber;
    }

    public set setBlockNumber(blockNumber: number) {
        this.blockNumber = blockNumber;
    }

    public set setFloor(floor: number) {
        this.floor = floor;
    }

    public set setFlatMeasurements(flatMeasurements: FlatMeasurements) {
        this.flatMeasurements = flatMeasurements;
    }

    public set setOwnersNames(ownersNames: OwnerName[]) {
        this.ownersNames = ownersNames;
    }
}