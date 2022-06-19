import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Resztvevo } from 'src/app/model/resztvevo';
import { ResztvevoService } from 'src/app/service/resztvevo.service';

@Component({
  selector: 'app-resztvevo-editor',
  templateUrl: './resztvevo-editor.component.html',
  styleUrls: ['./resztvevo-editor.component.scss']
})
export class ResztvevoEditorComponent implements OnInit {

  resztvevo$: Observable<Resztvevo> = this.activatedRoute.params.pipe(
    switchMap(params => this.resztvevoService.getOne(params['id'])),
  );

  constructor(
    private router: Router,
    private resztvevoService: ResztvevoService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  update(resztvevo: Resztvevo): void {
    this.resztvevoService.update(resztvevo).subscribe({
      next: updatedResztvevo => this.router.navigate(['/', 'resztvevo']),
      error: err => console.error(err),
    });
  }

}
