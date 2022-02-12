import { Component, OnInit } from '@angular/core';
import { DiaryService } from '../shared/diary.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errors: any = []
  kakeibos: any = []

  constructor(
    private diaryService: DiaryService,
    private router: Router
  ) { }

  ngOnInit() { }

  register(registerForm) {
    this.diaryService.register(registerForm.value).subscribe(
      (result) => {
        console.log("Success!")
        // this.router.navigate(['/login'])
      },
      (err: HttpErrorResponse) => {
        console.error(err)
        this.errors = err.error.errors
      }
    )
  }
}
