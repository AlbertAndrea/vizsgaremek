import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ConfigService } from 'src/app/service/config.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  columns = this.config.userTableColumns;

  list$ = this.userService.getAll();

  constructor(
    private userService: UserService,
    private router: Router,
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
  }
  startEdit(user: User): void {
    this.router.navigate(['/', 'user', 'edit', user._id]);
    };

  deleteEntity(user: User): void {
    if (user._id) {
      this.userService.delete(user._id).subscribe({
        next: ()  => {
          this.list$ = this.userService.getAll()
        },
        error: err => console.error(err)
      })
    }
  }

  createEntity(): void {
    this.router.navigate(['/', 'user', 'edit', '0']);
  }
};
