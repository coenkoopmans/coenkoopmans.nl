import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { MenuComponent } from './components/menu/menu.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    MenuComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
