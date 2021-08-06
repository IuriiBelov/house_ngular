import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { OwnersComponent }   from './owners.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ OwnersComponent ],
    exports:      [ OwnersComponent ]
})

export class OwnersModule { }