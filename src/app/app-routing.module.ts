import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'salesprochild',
    children: [
      /**
       * All routes specific to this app go here.
       */
      { path: 'home', component: HomeComponent },
      { path: 'details/:id', component: DetailsComponent },
      {
        path: '',
        component: HomeComponent
      }]
  },
  { path: '', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
