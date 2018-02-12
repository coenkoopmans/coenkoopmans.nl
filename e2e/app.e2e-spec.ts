import { AppPage } from './app.po';

describe('Generic app parts', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should find all images', () => {
    expect(page.getBrokenImagesCount()).toBe(0);
  });

});

describe('Intro component', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display the page title', () =>
    expect(page.getPageTitle()).toEqual('Ik ben\nCoen\nKoopmans.'));

  it('should display the tag line', () => {
    expect(page.getTagLine()).toEqual('Front-end developer met passie voor schone code.');
  });
});

describe('Menu component', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display the menu button', () => {
    expect(page.getMenuButton()).toBeTruthy();
  });
});
