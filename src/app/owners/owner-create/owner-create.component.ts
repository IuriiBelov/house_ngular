import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Owner} from "../model/owner";
import {OwnerName} from "../model/owner-name";
import {OwnersService} from "../owners.service";

@Component({
  selector: 'owner-create-component',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.css']
})
export class OwnerCreateComponent implements OnInit {

  _firstName: string = "";
  _lastName: string = "";
  _phoneNumber: string = "";
  _flatsNumbers: number[] = [];

  _flatsNumbersAsString: string = "";

  _owner: Owner;

  constructor(private _ownersService: OwnersService) {}

  @Output() createOwner = new EventEmitter<Owner>();

  create(): void {
    this.parseFlatsNumbers();
    this._owner = new Owner(null, new OwnerName(this._firstName, this._lastName),
        this._phoneNumber, this._flatsNumbers);
    this._owner = this._ownersService.createOwner(this._owner);
    this.createOwner.emit(this._owner);
  }

  private parseFlatsNumbers(): void {
    let tokens: string[] = this._flatsNumbersAsString.split(" ");
    this._flatsNumbers = [];
    for (let token of tokens) {
      this._flatsNumbers.push(parseInt(token));
    }
  }

  ngOnInit(): void {
  }
}
