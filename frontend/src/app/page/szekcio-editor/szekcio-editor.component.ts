import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Szekcio } from 'src/app/model/szekcio';
import { SzekcioService } from 'src/app/service/szekcio.service';

@Component({
  selector: 'app-szekcio-editor',
  templateUrl: './szekcio-editor.component.html',
  styleUrls: ['./szekcio-editor.component.scss']
})
export class SzekcioEditorComponent implements OnInit {

  szekcio$: Observable<Szekcio> = this.activatedRoute.params.pipe(
    switchMap(params => this.szekcioService.getOne(params['id'])),
  );

  constructor(
    private router: Router,
    private szekcioService: SzekcioService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  update(szekcio: Szekcio): void {
    this.szekcioService.update(szekcio).subscribe({
      next: updatedSzekcio => this.router.navigate(['/', 'szekcio']),
      error: err => console.error(err),
    });
  }

}
