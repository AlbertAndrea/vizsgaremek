import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDataTableComponent } from './ngx-data-table/ngx-data-table.component';
import { FormsModule } from '@angular/forms';
import { SorterPipe } from '../pipe/sorter.pipe';

@NgModule({
  declarations: [
    NgxDataTableComponent,
    SorterPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    NgxDataTableComponent,
  ],
})
export class DataTableModule { }
