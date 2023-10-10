import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent, LoginPageComponent } from './pages';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
