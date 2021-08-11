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

import { AllBillsComponent } from './bills/all-bills/all-bills.component';
import { AllBlocksComponent } from './blocks/all-blocks/all-blocks.component';
import { AllFlatsComponent } from './flats/all-flats/all-flats.component';
import { AllOwnersComponent } from './owners/all-owners/all-owners.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes =[
    { path: 'bills', component: AllBillsComponent },
    { path: 'blocks', component: AllBlocksComponent },
    { path: 'flats', component: AllFlatsComponent },
    { path: 'owners', component: AllOwnersComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, BillsModule, BlocksModule,
        FlatsModule, OwnersModule, RouterModule.forRoot(appRoutes), HeaderModule, BrowserAnimationsModule],
    declarations: [ AppComponent, DateFormatPipe ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
