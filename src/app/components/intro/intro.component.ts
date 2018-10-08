import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  public scrollDown(): void {
    const introElement: HTMLElement = document.getElementsByClassName('intro')[0] as HTMLElement;
    const wrapperElement: HTMLElement = document.getElementsByClassName('wrapper')[0] as HTMLElement;
    wrapperElement.scroll({top: introElement.offsetHeight, left: window.scrollX, behavior: 'smooth'});
  }
}
