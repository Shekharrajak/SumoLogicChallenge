import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { TreeviewModule } from 'ngx-treeview';
import { GameComponent } from './game/game.component';
import { GameService } from './services/game/game.service';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent,
    data: { title: 'Sumo Logic' }
  },
  { path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GameComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    TreeviewModule.forRoot(),
    FormsModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
