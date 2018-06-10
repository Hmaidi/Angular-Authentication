import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router' ;
import { FormsModule, ReactiveFormsModule } from '@angular/forms' ;
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    FormsModule,
    HttpModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
