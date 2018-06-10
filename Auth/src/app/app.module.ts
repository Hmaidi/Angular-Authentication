import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router' ;
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecEventsComponent } from './spec-events/spec-events.component';

const routes: Routes = [
  { path: '',
   redirectTo: 'events',
   pathMatch: 'full'
},

 { path: 'events',
   component: EventsComponent
 },
 { path: 'specevents',
   component: SpecEventsComponent
 },
 { path: 'login',
   component: LoginComponent
 },
 { path: 'register',
   component: RegisterComponent
}

];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecEventsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
