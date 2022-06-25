import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Szekcio } from 'src/app/model/szekcio';
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
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  startEdit(szekcio: Szekcio): void {
    this.router.navigate(['/', 'szekcio', 'edit', szekcio._id]);
  }

  deleteEntity(szekcio: Szekcio): void {
    if (szekcio._id) {
      this.szekcioService.delete(szekcio._id).subscribe({
        next: ()  => {
          this.list$ = this.szekcioService.getAll()
        },
        error: err => console.error(err)
      })
    }
  }

  createEntity(): void {
    this.router.navigate(['/', 'szekcio', 'edit', '0']);
  }
}
