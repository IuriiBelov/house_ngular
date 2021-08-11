import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Owner} from "./model/owner";

@Injectable({
    providedIn: 'root'
})
export class OwnersService {

    constructor(private http: HttpClient) {
    }

    getAllOwners(page: number, size: number): Owner[] {

        const url: string = "http://localhost:8080/owners?page=" + page + "&size=" + size;

        let allOwners: Owner[] = [];

        this.http
            .get<Owner[]>(url)
            .subscribe((data:Owner[]) => {
                for (const elem of data) {
                    allOwners.push(elem);
                }
            });

        return allOwners;
    }

    createOwner(owner: Owner): Owner {

        const url: string = "http://localhost:8080/owners";
        const body = {id: owner.id, name: {firstName: owner.name.firstName,
                lastName: owner.name.lastName}, phoneNumber: owner.phoneNumber,
            flatsNumbers: owner.flatsNumbers};

        let newOwner: Owner;

        this.http.post(url, body).subscribe((data: any) => newOwner = data);

        return newOwner;
    }

    updateOwner(owner: Owner): Owner {

        const url: string = "http://localhost:8080/owners/" + owner.id;

        let updatedOwner: Owner;

        this.http.put<Owner>(url, owner).subscribe((data: Owner) => updatedOwner = data);

        return updatedOwner;
    }

    deleteOwner(id: number): Owner {

        const url: string = "http://localhost:8080/owners/" + id;

        let owner: Owner;

        this.http.delete<Owner>(url).subscribe((data: Owner) => owner = data);

        return owner;
    }
}