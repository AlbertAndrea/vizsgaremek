import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { ResztvevoService } from 'src/app/service/resztvevo.service';

@Component({
  selector: 'app-resztvevo',
  templateUrl: './resztvevo.component.html',
  styleUrls: ['./resztvevo.component.scss']
})
export class ResztvevoComponent implements OnInit {

  columns = this.config.resztvevoTableColumns;

  list$ = this.resztvevoService.getAll();

  constructor(
    private config: ConfigService,
    private resztvevoService: ResztvevoService,
  ) { }

  ngOnInit(): void {
  }

}
