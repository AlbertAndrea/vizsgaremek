import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, of } from 'rxjs';
import { Resztvevo } from 'src/app/model/resztvevo';
import { ResztvevoService } from 'src/app/service/resztvevo.service';

@Component({
  selector: 'app-resztvevo-editor',
  templateUrl: './resztvevo-editor.component.html',
  styleUrls: ['./resztvevo-editor.component.scss']
})
export class ResztvevoEditorComponent implements OnInit {

  resztvevo$: Observable<Resztvevo> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (params['id'] === '0') {
        return of(new Resztvevo());
      }
      return this.resztvevoService.getOne(params['id']);
    })
  );
  resztvevo: Resztvevo = new Resztvevo();

  constructor(
    private router: Router,
    private resztvevoService: ResztvevoService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  onSave(resztvevo: Resztvevo): void {
    if (!resztvevo._id) {
      resztvevo._id = undefined;
      this.resztvevoService.create(resztvevo).subscribe({
        next: updatedResztvevo => {
          this.router.navigate(['/', 'resztvevo'])
        },
        error: err => console.error(err),
      });
    } else {
      this.resztvevoService.update(resztvevo).subscribe({
        next: updatedResztvevo => this.router.navigate(['/', 'resztvevo']),
         error: err => console.error(err),
      });
    }
  }
}
