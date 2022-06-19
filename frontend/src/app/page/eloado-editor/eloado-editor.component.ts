import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Eloado } from 'src/app/model/eloado';
import { EloadoService } from 'src/app/service/eloado.service';
import { ResztvevoService } from 'src/app/service/resztvevo.service';


@Component({
  selector: 'app-eloado-editor',
  templateUrl: './eloado-editor.component.html',
  styleUrls: ['./eloado-editor.component.scss']
})
export class EloadoEditorComponent implements OnInit {

  eloado$: Observable<Eloado> = this.activatedRoute.params.pipe(
    switchMap(params => this.eloadoService.getOne(params['id'])),
  );


  constructor(
    private router: Router,
    private eloadoService: EloadoService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  update(eloado: Eloado): void {
    this.eloadoService.update(eloado).subscribe({
      next: updatedEloado => this.router.navigate(['/', 'eloado']),
      error: err => console.error(err),
    });
  }

}
