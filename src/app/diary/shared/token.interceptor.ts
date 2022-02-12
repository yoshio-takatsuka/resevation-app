import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { DiaryService } from './diary.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public diaryService: DiaryService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.diaryService.getToken()
    
    if(token) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      })
    }

    return next.handle(req)
  }
}
