import { AppPage } from './app.po';

describe('Generic app parts', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should find all images', function () {
    page.checkBrokenImages();
  });

});

describe('Intro component', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display the page title', () => {
    const pageTitle = page.getPageTitle();
    expect(pageTitle).toContain('Ik ben');
    expect(pageTitle).toContain('Coen');
    expect(pageTitle).toContain('Koopmans');
    expect(pageTitle).toContain('.');
  });

  it('should display the tag line', () => {
    const tagLineText = page.getTagLine();
    expect(tagLineText).toEqual('Front-end developer met passie voor schone code.');
  });

  it('should display the tag line', () => {
    const tagLineText = page.getTagLine();
    expect(tagLineText).toEqual('Front-end developer met passie voor schone code.');
  });
});

describe('Menu component', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display the menu button', () => {
    const menuButton = page.getMenuButton();
    expect(menuButton.isPresent()).toBeTruthy();
  });
});
