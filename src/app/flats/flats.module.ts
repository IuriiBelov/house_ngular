import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { FlatsComponent }   from './flats.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ FlatsComponent ],
    exports:      [ FlatsComponent ]
})

export class FlatsModule { }