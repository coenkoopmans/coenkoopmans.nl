import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  checkBrokenImages() {
    const brokenImagesCount = browser.executeAsyncScript(function (callback) {
      const imgs = document.getElementsByTagName('img');
      let loaded = 0;
      for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].naturalWidth > 0) {
          loaded = loaded + 1;
        }
      }
      callback(imgs.length - loaded);
    });
    expect(brokenImagesCount).toBe(0);
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
