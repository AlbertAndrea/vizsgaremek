import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resztvevo } from 'src/app/model/resztvevo';
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
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  startEdit(resztvevo: Resztvevo): void {
    this.router.navigate(['/', 'resztvevo', 'edit', resztvevo._id]);
  }

  deleteEntity(resztvevo: Resztvevo): void {
    if (resztvevo._id) {
      this.resztvevoService.delete(resztvevo._id).subscribe({
        next: ()  => {
          this.list$ = this.resztvevoService.getAll()
        },
        error: err => console.error(err)
      })
    }
  }

  createEntity(): void {
    this.router.navigate(['/', 'resztvevo', 'edit', '0']);
  }
}
