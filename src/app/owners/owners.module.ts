import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AllOwnersComponent }   from './all-owners/all-owners.component';
import { OwnerCreateComponent } from './owner-create/owner-create.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AllOwnersComponent, OwnerCreateComponent ],
    exports:      [ AllOwnersComponent ]
})

export class OwnersModule { }