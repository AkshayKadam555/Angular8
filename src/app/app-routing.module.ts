import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { UserComponent } from './routing/user/user.component';
import { ServerComponent } from './routing/server/server.component';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';


const appRoutes: Routes = [
 /*  {path: '**', redirectTo: '/not-found'}, */
  { path: '', component: HomeComponent},
  { path: 'users', component: UserComponent, children: [
    { path: ':id/:name', component: UserComponent}
  ]},

  { path: 'server', component: ServerComponent, children: [
  { path: ':id', component: ServerComponent},
  { path: ':id/edit', component: ServerComponent}
]},

{path: 'not-found', component: PageNotFoundComponent},
{path: 'something', redirectTo: '/not-found'} 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
