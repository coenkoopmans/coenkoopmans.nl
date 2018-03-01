import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { IntroComponent } from './components/intro/intro.component';
import { SkillsComponent } from './components/skills/skills.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MenuComponent,
        IntroComponent,
        SkillsComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
