import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendComponent } from './components/frontend/frontend.component';

const routes: Routes = [
  { path: '', redirectTo:'/frontend', pathMatch: 'full' }, 
  { path: 'frontend', component: FrontendComponent },
  { path: '**', redirectTo: '/frontend', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
