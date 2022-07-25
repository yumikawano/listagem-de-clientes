import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NewClientComponent } from './views/new-client/new-client.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'new-client',
    component: NewClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
