import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { IskolaService } from 'src/app/service/iskola.service';

@Component({
  selector: 'app-iskola',
  templateUrl: './iskola.component.html',
  styleUrls: ['./iskola.component.scss']
})
export class IskolaComponent implements OnInit {

  columns = this.config.iskolaTableColumns;

  list$ = this.iskolaService.getAll();

  constructor(
    private config: ConfigService,
    private iskolaService: IskolaService,
  ) { }

  ngOnInit(): void {
  }

}
