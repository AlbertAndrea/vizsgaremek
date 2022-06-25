import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iskola } from 'src/app/model/iskola';
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
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  startEdit(iskola: Iskola): void {
    this.router.navigate(['/', 'iskola', 'edit', iskola._id]);
  }

  deleteEntity(iskola: Iskola): void {
    if (iskola._id) {
      this.iskolaService.delete(iskola._id).subscribe({
        next: ()  => {
          this.list$ = this.iskolaService.getAll()
        },
        error: err => console.error(err)
      })
    }
  }

  createEntity(): void {
    this.router.navigate(['/', 'iskola', 'edit', '0']);
  }


}
