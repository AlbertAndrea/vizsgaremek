import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, of } from 'rxjs';
import { Szallas } from 'src/app/model/szallas';
import { SzallasService } from 'src/app/service/szallas.service';

@Component({
  selector: 'app-szallas-editor',
  templateUrl: './szallas-editor.component.html',
  styleUrls: ['./szallas-editor.component.scss']
})
export class SzallasEditorComponent implements OnInit {

  szallas$: Observable<Szallas> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (params['id'] === '0') {
        return of(new Szallas());
      }
      return this.szallasService.getOne(params['id']);
    })
  );
  szallas: Szallas = new Szallas();

  constructor(
    private router: Router,
    private szallasService: SzallasService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  onSave(szallas: Szallas): void {
    if (!szallas._id) {
      szallas._id = undefined;
      this.szallasService.create(szallas).subscribe({
        next: updatedSzallas => {
          this.router.navigate(['/', 'szallas'])
        },
        error: err => console.error(err),
      });
    } else {
      this.szallasService.update(szallas).subscribe({
        next: updatedSzallas => this.router.navigate(['/', 'szallas']),
         error: err => console.error(err),
      });
    }
  }

}
