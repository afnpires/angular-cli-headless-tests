import { AngularCliHeadlessTestsPage } from './app.po';

describe('angular-cli-headless-tests App', () => {
  let page: AngularCliHeadlessTestsPage;

  beforeEach(() => {
    page = new AngularCliHeadlessTestsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
