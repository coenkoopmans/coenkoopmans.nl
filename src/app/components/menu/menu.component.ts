import { Component, OnInit } from '@angular/core';

export enum Pages {
  Intro = 'page-intro',
  Skills = 'page-skills',
  About = 'page-about'
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public pages: typeof Pages = Pages;
  public menuImage: string;

  private _menuOpen: boolean;
  get menuOpen(): boolean { return this._menuOpen; }
  set menuOpen(menuOpen: boolean) {
    this._menuOpen = menuOpen;
    const menuImage: string = menuOpen ? 'menu-button-close' : 'menu-button';
    this.menuImage = `/assets/ui/${menuImage}.svg`;
  }

  public ngOnInit(): void {
    this.menuOpen = false;
  }

  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  public navigate(page: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.menuOpen = false;
    this.doScroll(page);
  }

  private doScroll(elementId: string): void {
    const scrollToElement: HTMLElement = document.getElementById(elementId) as HTMLElement;
    const wrapperElement: HTMLElement = document.getElementsByClassName('wrapper')[0] as HTMLElement;
    wrapperElement.scroll({top: scrollToElement.offsetTop, left: window.scrollX, behavior: 'smooth'});
  }
}
