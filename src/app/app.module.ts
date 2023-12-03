import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from './pipes/shorten.pipe';
import { DatePipe } from '@angular/common';
import { TurnGreenDirective } from './directives/turn-green.directive';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { StrengthPasswordDirective } from './directives/strength-password.directive';
import { UserReactiveFormComponent } from './components/user-reactive-form/user-reactive-form.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

export const APIURL = new InjectionToken<string>('');
@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    TurnGreenDirective,
    ParentComponent,
    ChildComponent,
    UserFormComponent,
    StrengthPasswordDirective,
    UserReactiveFormComponent,
    RxjsComponent,
    NotFoundComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    DatePipe,
    // {
    //   provide: UserService,
    //   useClass: UserService,
    // },
    // {
    //   provide: UserService,
    //   useClass: BetterUserService,
    // },
    {
      provide: APIURL,
      useValue: 'http://someendpoint.com/api',
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
