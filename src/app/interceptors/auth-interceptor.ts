import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // localStorage.getItem('token');
  // localStorage.setItem('token', token)
  token: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjc5MjgyMzksInVzZXJSb2xlcyI6WyJBRE1JTiIsIkRCX1JFQUQiLCJEQl9XUklURSJdLCJ1c2VySWQiOjEyMzQ1LCJpYXQiOjE2Mjc5MjgxMTl9.8vTwsBOp8LSa0sdc0nWAUnmWAAgOnS0ElB3bfaiSRfQ';

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.token) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + this.token),
      });
    }
    console.log(req);


    // return next.handle(req).pipe(
    //   map((res: any) => {
    //     if (res instanceof HttpResponse) {
    //       return res;
    //     }
    //     return res;
    //   }),
    //   catchError((error: HttpErrorResponse) => {
    //     return this.handleError(error);
    //   })
    // );

    // catchError((error: HttpErrorResponse) => {
    //   return this.handleError(error);
    // })

    //error management
    // handleError(errorRes: HttpErrorResponse) {
    //   let errorMessage = 'Unknown message';
  
    //   switch (errorRes.error.code) {
    //     case 400:
    //       errorMessage = 'Bad Request';
    //       break;
    //     case 401:
    //       errorMessage = 'Unauthorized';
    //       break;
    //     case 402:
    //       errorMessage = 'Payment Required';
    //       break;
    //     case 403:
    //       errorMessage = 'Forbidden';
    //       break;
    //     case 404:
    //       errorMessage = 'Not Found';
    //       break;
    //     case 405:
    //       errorMessage = 'Method Not Allowed';
    //       break;
    //     case 406:
    //       errorMessage = 'Not Acceptable';
    //       break;
    //     case 407:
    //       errorMessage = 'Proxy Authentication Required';
    //       break;
    //     case 408:
    //       errorMessage = 'Request Timeout';
    //       break;
    //   }
  
    //   alert(errorMessage);
  
    //   return throwError(errorMessage);
    // }

    // isteği durdurmak için  return EMPTY;

    return next.handle(req);
  }
}
