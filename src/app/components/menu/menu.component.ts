import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menuImage: string;

  private _menuOpen: boolean;
  get menuOpen(): boolean { return this._menuOpen; }
  set menuOpen(menuOpen: boolean) {
    this._menuOpen = menuOpen;
    const menuImage: string = menuOpen ? 'menu-button-close' : 'menu-button';
    this.menuImage = `/assets/ui/${menuImage}.svg`;
  }

  public ngOnInit(): void {
    this.menuOpen = true;
  }

}
