import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { HttpClientModule }   from '@angular/common/http';

import {Routes, RouterModule} from '@angular/router';

import { BillsModule } from './bills/bills.module';
import { BlocksModule } from './blocks/blocks.module';
import { FlatsModule } from './flats/flats.module';
import { OwnersModule } from './owners/owners.module';
import { HeaderModule } from "./header/header.module";

import { AppComponent }   from './app.component';
import { DateFormatPipe } from './bills/dateFormat.pipe';

import { BillsComponent } from './bills/bills.component';
import { AllBlocksComponent } from './blocks/all-blocks/all-blocks.component';
import { FlatsComponent } from './flats/flats.component';
import { OwnersComponent } from './owners/owners.component';

const appRoutes: Routes =[
    { path: 'bills', component: BillsComponent },
    { path: 'blocks', component: AllBlocksComponent },
    { path: 'flats', component: FlatsComponent },
    { path: 'owners', component: OwnersComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, BillsModule, BlocksModule,
        FlatsModule, OwnersModule, RouterModule.forRoot(appRoutes), HeaderModule],
    declarations: [ AppComponent, DateFormatPipe ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
