import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ActiveComponent } from './components/active/active.component';
import { NoActiveComponent } from './components/no-active/no-active.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { PostCardComponent } from './components/post-card/post-card.component';

const routes: Route[] = [
  {
      path: "active" ,
      component: ActiveComponent
  },
  {
      path: "noActive",
      component: NoActiveComponent
  },
  {
    path: "home",
    component: HomeComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    ActiveComponent,
    NoActiveComponent,
    NavbarComponent,
    HomeComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
