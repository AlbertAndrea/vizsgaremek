import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Szallas } from 'src/app/model/szallas';
import { SzallasService } from 'src/app/service/szallas.service';

@Component({
  selector: 'app-szallas-editor',
  templateUrl: './szallas-editor.component.html',
  styleUrls: ['./szallas-editor.component.scss']
})
export class SzallasEditorComponent implements OnInit {

  szallas$: Observable<Szallas> = this.activatedRoute.params.pipe(
    switchMap(params => this.szallasService.getOne(params['id'])),
  );

  constructor(
    private router: Router,
    private szallasService: SzallasService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  update(szekcio: Szallas): void {
    this.szallasService.update(szekcio).subscribe({
      next: updatedSzallas => this.router.navigate(['/', 'szallas']),
      error: err => console.error(err),
    });
  }

}

