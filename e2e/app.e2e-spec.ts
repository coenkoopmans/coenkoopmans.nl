import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should find all images', () => expect(page.getBrokenImagesCount()).toBe(0));

  it('should display the page title', () =>
    expect(page.getPageTitle()).toEqual('Ik ben\nCoen\nKoopmans.'));

  it('should display the tag line', () =>
    expect(page.getTagLine())
      .toEqual('Front-end developer met passie voor schone code.'));

  it('should display the menu button', () => expect(page.getMenuButton()).toBeTruthy());

});
