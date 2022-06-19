import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Iskola } from 'src/app/model/iskola';
import { IskolaService } from 'src/app/service/iskola.service';

@Component({
  selector: 'app-iskola-editor',
  templateUrl: './iskola-editor.component.html',
  styleUrls: ['./iskola-editor.component.scss']
})
export class IskolaEditorComponent implements OnInit {

  iskola$: Observable<Iskola> = this.activatedRoute.params.pipe(
    switchMap(params => this.iskolaService.getOne(params['id'])),
  );

  constructor(
    private router: Router,
    private iskolaService: IskolaService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  update(iskola: Iskola): void {
    this.iskolaService.update(iskola).subscribe({
      next: updatedIskola => this.router.navigate(['/', 'iskola']),
      error: err => console.error(err),
    });
  }
}
