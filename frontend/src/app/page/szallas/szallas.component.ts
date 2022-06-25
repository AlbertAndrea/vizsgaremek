import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Szallas } from 'src/app/model/szallas';
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
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  startEdit(szallas: Szallas): void {
    this.router.navigate(['/', 'szallas', 'edit', szallas._id]);
  }

  deleteEntity(szallas: Szallas): void {
    if (szallas._id) {
      this.szallasService.delete(szallas._id).subscribe({
        next: ()  => {
          this.list$ = this.szallasService.getAll()
        },
        error: err => console.error(err)
      })
    }
  }

  createEntity(): void {
    this.router.navigate(['/', 'szallas', 'edit', '0']);
  }
}
