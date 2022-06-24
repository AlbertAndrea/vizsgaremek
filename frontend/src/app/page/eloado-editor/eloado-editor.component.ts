import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, of } from 'rxjs';
import { Eloado } from 'src/app/model/eloado';
import { EloadoService } from 'src/app/service/eloado.service';


@Component({
  selector: 'app-eloado-editor',
  templateUrl: './eloado-editor.component.html',
  styleUrls: ['./eloado-editor.component.scss']
})
export class EloadoEditorComponent implements OnInit {

  eloado$: Observable<Eloado> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (params['id'] === '0') {
        return of(new Eloado());
      }
      return this.eloadoService.getOne(params['id']);
    })
  );
  eloado: Eloado = new Eloado();

  constructor(
    private router: Router,
    private eloadoService: EloadoService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

  }

  onSave(eloado: Eloado): void {
    if (!eloado._id) {
      eloado._id = undefined;
      this.eloadoService.create(eloado).subscribe({
        next: updatedEloado => {
          this.router.navigate(['/', 'eloado'])
        },
        error: err => console.error(err),
      });
    } else {
      this.eloadoService.update(eloado).subscribe({
        next: updatedEloado => this.router.navigate(['/', 'eloado']),
         error: err => console.error(err),
      });
    }
  }
}


// update(eloado: Eloado): void {
  //   this.eloadoService.update(eloado).subscribe({
  //     next: updatedEloado => this.router.navigate(['/', 'eloado']),
  //     error: err => console.error(err),
  //   });
  // }
