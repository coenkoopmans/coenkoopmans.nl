import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  public scrollDown() {
    const element: HTMLElement = document.getElementsByClassName('intro')[0] as HTMLElement;
    window.scroll({top: element.offsetHeight, left: window.scrollX, behavior: 'smooth'});
  }

}
