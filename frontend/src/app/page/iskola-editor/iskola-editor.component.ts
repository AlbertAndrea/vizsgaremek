import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, of } from 'rxjs';
import { Iskola } from 'src/app/model/iskola';
import { IskolaService } from 'src/app/service/iskola.service';

@Component({
  selector: 'app-iskola-editor',
  templateUrl: './iskola-editor.component.html',
  styleUrls: ['./iskola-editor.component.scss']
})
export class IskolaEditorComponent implements OnInit {

  iskola$: Observable<Iskola> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (params['id'] === '0') {
        return of(new Iskola());
      }
      return this.iskolaService.getOne(params['id']);
    })
  );
  iskola: Iskola = new Iskola();


  constructor(
    private router: Router,
    private iskolaService: IskolaService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  onSave(iskola: Iskola): void {
    if (!iskola._id) {
      iskola._id = undefined;
      this.iskolaService.create(iskola).subscribe({
        next: updatedIskola => {
          this.router.navigate(['/', 'iskola'])
        },
        error: err => console.error(err),
      });
    } else {
      this.iskolaService.update(iskola).subscribe({
        next: updatedIskola => this.router.navigate(['/', 'iskola']),
         error: err => console.error(err),
      });
    }
  }
}
