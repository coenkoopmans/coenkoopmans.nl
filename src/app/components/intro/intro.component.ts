import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  public scrollDown() {
    const element: HTMLElement = document.getElementsByClassName('intro')[0] as HTMLElement;
    // TODO animate scrolling
    window.scrollTo(window.scrollX, element.offsetHeight);
  }

}
