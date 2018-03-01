import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getBrokenImagesCount() {
    return browser.executeScript(() =>
      [].slice.call(document.getElementsByTagName('img'))
        .reduce((count, img) => img.naturalWidth <= 0 ? count += 1 : count, 0));
  }

  getPageTitle() {
    return element(by.css('app-root h1')).getText();
  }

  getTagLine() {
    return element(by.css('app-root .tagLine')).getText();
  }

  getMenuButton() {
    return element(by.css('app-root app-menu .menuButton'));
  }

  getScrollDownButton() {
    return element(by.css('.scrollDownButton'));
  }

  getSkillsContainer() {
    return element(by.css('app-root app-skills .skills'));
  }

  getSkills() {
    return element.all(by.css('app-root app-skills .skills__item'));
  }
}
