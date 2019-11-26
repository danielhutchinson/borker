import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationContainerComponent } from './authentication/containers/authentication-container/authentication-container.component';

const routes: Routes = [
  {
    path: 'login',
    component: AuthenticationContainerComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
