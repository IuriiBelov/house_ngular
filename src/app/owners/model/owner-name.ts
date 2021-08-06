export class OwnerName {

    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public get getFirstName(): string {
        return this.firstName;
    }

    public get getLastName(): string {
        return this.lastName;
    }

    public set setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    public set setLastName(lastName: string) {
        this.lastName = lastName;
    }
}