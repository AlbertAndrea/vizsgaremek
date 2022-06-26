import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Eloado } from 'src/app/model/eloado';
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
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  startEdit(eloado: Eloado): void {
    this.router.navigate(['/', 'eloado', 'edit', eloado._id]);
    };

  deleteEntity(eloado: Eloado): void {
    if (eloado._id) {
      this.eloadoService.delete(eloado._id).subscribe({
        next: ()  => {
          this.list$ = this.eloadoService.getAll()
        },
        error: err => console.error(err)
      })
    }
  }

  createEntity(): void {
    this.router.navigate(['/', 'eloado', 'edit', '0']);
  }
};
