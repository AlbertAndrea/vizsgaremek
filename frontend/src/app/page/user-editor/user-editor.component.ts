import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, of } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {

  user$: Observable<User> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (params['id'] === '0') {
        return of(new User());
      }
      return this.userService.getOne(params['id']);
    })
  );
  user: User = new User();

  constructor(
    private router: Router,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  onSave(user: User): void {
    if (!user._id) {
      user._id = undefined;
      this.userService.create(user).subscribe({
        next: updatedUsers => {
          this.router.navigate(['/', 'user'])
        },
        error: err => console.error(err),
      });
    } else {
      this.userService.update(user).subscribe({
        next: updatedUser => this.router.navigate(['/', 'user']),
         error: err => console.error(err),
      });
    }
  }

}
