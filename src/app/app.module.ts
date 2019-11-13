import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { FirstComponent } from './first/first.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDatabindingComponent } from './two-way-databinding/two-way-databinding.component';
import { NgModel, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { DirectivesComponent } from './directives/directives.component';
import { NgstyleDirectiveComponent } from './ngstyle-directive/ngstyle-directive.component';
import { ErrorMessagesComponent } from './error-messages/error-messages.component';
import { BindingCustomPropertiesComponent } from './binding-custom-properties/binding-custom-properties.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { HomeComponent } from './routing/home/home.component';
import { ServerComponent } from './routing/server/server.component';
import { UserComponent } from './routing/user/user.component';
import { RoutingComponent } from './routing/routing.component';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ParentComponent } from './routing/parent/parent.component';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
import { ObservableComponent } from './observable/observable.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { FormsComponent } from './forms/forms.component';
import { ChildToChildComponent } from './mywork/child-to-child/child-to-child.component';
import { InputOutputComponent } from './mywork/input-output/input-output.component';
import { ChildComponent } from './child/child.component';
import { SiblingComponent } from './sibling/sibling.component';
import { Child1Component } from './sibling/child1/child1.component';
import { Child2Component } from './sibling/child2/child2.component';
import { PipeComponent } from './pipe/pipe.component';
import { HttpComponent } from './../app/http/http.component';
import { HttpClientModule, HttpHeaders} from '@angular/common/http';

const appRoutes: Routes = [
  {path: '**', redirectTo: '/not-found'},
  { path: '', component: HomeComponent},
  { path: 'users', component: UserComponent, children: [
    { path: ':id/:name', component: UserComponent}
  ]},

  { path: 'server', component: ServerComponent, children: [
  { path: ':id', component: ServerComponent},
  { path: ':id/edit', component: ServerComponent}
]},

{path: 'not-found', component: PageNotFoundComponent},
/* {path: 'something', redirectTo: '/not-found'} */
];
@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent,
    WarningAlertComponent,
    FirstComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayDatabindingComponent,
    DirectivesComponent,
    NgstyleDirectiveComponent,
    ErrorMessagesComponent,
    BindingCustomPropertiesComponent,
    LifecycleHooksComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    ServiceComponentComponent,
    HomeComponent,
    ServerComponent,
    UserComponent,
    RoutingComponent,
    MainComponent,
    ParentComponent,
    PageNotFoundComponent,
    ObservableComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    FormsComponent,
    ChildToChildComponent,
    InputOutputComponent,
    ChildComponent,
    SiblingComponent,
    Child1Component,
    Child2Component,
    PipeComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
