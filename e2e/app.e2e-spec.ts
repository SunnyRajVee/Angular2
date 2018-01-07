import { NewHeroAppPage } from './app.po';

describe('new-hero-app App', function() {
  let page: NewHeroAppPage;

  beforeEach(() => {
    page = new NewHeroAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
