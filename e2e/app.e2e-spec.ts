import { EconomiaPage } from './app.po';

describe('economia App', () => {
  let page: EconomiaPage;

  beforeEach(() => {
    page = new EconomiaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
