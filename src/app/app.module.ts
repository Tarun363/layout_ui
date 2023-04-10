import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { LayoutComponent } from './layout/layout.component';
import { MainSectionComponent } from './main-section/main-section.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    LayoutComponent,
    MainSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
