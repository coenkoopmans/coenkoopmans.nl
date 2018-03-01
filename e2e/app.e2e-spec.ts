import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should find all images', () => expect(page.getBrokenImagesCount()).toBe(0));

  it('should display the page title', () =>
    expect(page.getPageTitle()).toEqual('Coen\nKoopmans.'));

  it('should display the tag line', () =>
    expect(page.getTagLine())
      .toEqual('Front-end developer met passie voor schone code.'));

  it('should display the menu button', () => expect(page.getMenuButton()).toBeTruthy());

  it('should display the scroll down button', () => expect(page.getScrollDownButton()).toBeTruthy());

  it('should display skills', () => {
    expect(page.getSkillsContainer()).toBeTruthy();
    expect(page.getSkills()).toBeTruthy();
    console.log( page.getSkills().getText() );
  });

});
