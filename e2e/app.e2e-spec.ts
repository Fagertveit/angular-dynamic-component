import { AngularDynamicComponentPage } from './app.po';

describe('angular-dynamic-component App', () => {
  let page: AngularDynamicComponentPage;

  beforeEach(() => {
    page = new AngularDynamicComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
