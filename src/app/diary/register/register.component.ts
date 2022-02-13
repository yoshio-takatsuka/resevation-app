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
  diaries: any = []    // 日記情報
  kakeibos: any = []   // 家計簿情報
  skills: any = []     // スキル情報

  constructor(
    private diaryService: DiaryService,
    private router: Router
  ) { }

  ngOnInit() { }

  // formの日記、家計簿、スキル情報を更新する 
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
  // 該当日付の日記、家計簿、スキル情報を取得してくる 
  Serch(registerForm) {
    debugger
    this.diaryService.getDairy(registerForm.value.p_date).subscribe(
      (result) => {
        this.diaries = result.daiaies
        this.kakeibos = result.kakeibos
        this.skills = result.skills

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


// const productsObservable = this.productService.getProducts()
// productsObservable.subscribe(
//   (data) => { 
//     this.products = data
//   },
//   (err) => { console.error('次のエラーが発生しました: ' + err) }
// )
// }








