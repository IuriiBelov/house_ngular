import { OwnerName } from './owner-name';

export class Owner {

    private id: number;
    private name: OwnerName;
    private phoneNumber: string;
    private flatsNumbers: number[];

    constructor(id: number, name: OwnerName, phoneNumber: string, flatsNumbers: number[]) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.flatsNumbers = flatsNumbers;
    }

    public get getId(): number {
        return this.id;
    }

    public get getName(): OwnerName {
        return this.name;
    }

    public get getPhoneNumber(): string {
        return this.phoneNumber;
    }

    public get getFlatsNumbers(): number[] {
        return this.flatsNumbers;
    }

    public set setName(name: OwnerName) {
        this.name = name;
    }

    public set setPhoneNumber(phoneNumber: string) {
        this.phoneNumber = phoneNumber;
    }

    public set setFlatsNumbers(flatsNumbers: number[]) {
        this.flatsNumbers = flatsNumbers;
    }
}