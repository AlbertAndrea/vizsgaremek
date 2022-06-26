import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDataTableComponent } from './ngx-data-table/ngx-data-table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NgxDataTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    NgxDataTableComponent
  ],
})
export class DataTableModule { }
