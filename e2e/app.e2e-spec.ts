import { AngulardevPage } from './app.po';

describe('angulardev App', () => {
  let page: AngulardevPage;

  beforeEach(() => {
    page = new AngulardevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
