import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MEComponent } from './me/me.component';

import { ApplicationRoutingModule } from './application-routing.module';

import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'ngx-easy-table';




@NgModule({
  declarations: [
    MEComponent,
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxDatatableModule,
    BrowserAnimationsModule,
    TableModule
  ]
})
export class ApplicationModule { }
