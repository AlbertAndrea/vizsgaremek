import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { SzallasService } from 'src/app/service/szallas.service';

@Component({
  selector: 'app-szallas',
  templateUrl: './szallas.component.html',
  styleUrls: ['./szallas.component.scss']
})
export class SzallasComponent implements OnInit {

  columns = this.config.szallasTableColumns;

  list$ = this.szallasService.getAll();

  constructor(
    private config: ConfigService,
    private szallasService: SzallasService,
  ) { }

  ngOnInit(): void {
  }

}
