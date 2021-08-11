import {Component, OnInit} from '@angular/core';
import {Owner} from "../model/owner";
import {OwnersService} from "../owners.service";

@Component({
    selector: 'owners-comp',
    templateUrl: './all-owners.component.html'
})
export class AllOwnersComponent implements OnInit {

    _owners: Owner[] = [];

    _page: number = 1;
    _size: number = 10;

    _ownerCreatingEnable: boolean = false;

    _createdOwner: Owner;

    constructor(private _ownersService: OwnersService) {}

    ngOnInit(): void {
        this._owners = this._ownersService.getAllOwners(this._page, this._size);
    }

    showOwners(): void {
        this._owners = this._ownersService.getAllOwners(this._page, this._size);
    }

    enableCreatingOwner(): void {
        this._ownerCreatingEnable = !this._ownerCreatingEnable;
    }

    createOwner(owner: Owner) {
        this._createdOwner = owner;
        this.enableCreatingOwner();
        this.showOwners();
    }

    updateOwner(owner: Owner): void {
        this.showOwners();
    }

    deleteOwner(id: number): void {
        let owner: Owner = this._ownersService.deleteOwner(id);
        this.showOwners();
    }
}