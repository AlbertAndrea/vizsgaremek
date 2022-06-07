import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { EloadoService } from 'src/app/service/eloado.service';

@Component({
  selector: 'app-eloado',
  templateUrl: './eloado.component.html',
  styleUrls: ['./eloado.component.scss']
})
export class EloadoComponent implements OnInit {

  columns = this.config.eloadoTableColumns;

  list$ = this.eloadoService.getAll();

  constructor(
    private config: ConfigService,
    private eloadoService: EloadoService,
  ) { }

  ngOnInit(): void {
  }

}
