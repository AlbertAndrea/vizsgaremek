import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { SzekcioService } from 'src/app/service/szekcio.service';

@Component({
  selector: 'app-szekcio',
  templateUrl: './szekcio.component.html',
  styleUrls: ['./szekcio.component.scss']
})
export class SzekcioComponent implements OnInit {

  columns = this.config.szekcioTableColumns;

  list$ = this.szekcioService.getAll();

  constructor(
    private config: ConfigService,
    private szekcioService: SzekcioService,
  ) { }

  ngOnInit(): void {
  }

}
