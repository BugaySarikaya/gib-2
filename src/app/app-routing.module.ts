import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserReactiveFormComponent } from './components/user-reactive-form/user-reactive-form.component';
import { ParentComponent } from './components/parent/parent.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ChildComponent } from './components/child/child.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  {
    path: 'user',
    component: UserReactiveFormComponent,
    children: [{ path: ':id', component: UserDetailComponent }],
  },
  // { path: 'user/:id', component: UserDetailComponent },
  { path: 'parent', component: ParentComponent },
  {
    path: 'user',
    // loadChildren: () =>
    //   import('./pages/user/user.module').then((m) => m.UserModule),
  },
  { path: '**', component: NotFoundComponent }, //wild cart route
];

/*
  PathLocationStrategy (HTML 5 Rounting, history.push), SEO friendly, SSR(server-side-rendering) 
  dezavantajı: eski browserlarda desteği yok

  HashLocationStrategy
  http://localhost:4200/#/user
  tüm browserlarda desteği var

  dezavantaj: urlde # işaretinin konması
  SSR(server side rendering) desteklemez
  RouterModule.forRoot(routes, { useHash: true })

*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
