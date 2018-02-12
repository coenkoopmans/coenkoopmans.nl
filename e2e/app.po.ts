import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getBrokenImagesCount() {
    return browser.executeAsyncScript((callback) => {
      // This is an HTML Collection, not an array, can't do reduce on it without transforming
      const imgs = document.getElementsByTagName('img');
      let loaded = 0;
      for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].naturalWidth > 0) {
          loaded++;
        }
      }
      callback(imgs.length - loaded);
    });
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
}
