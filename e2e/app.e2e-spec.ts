import { Ng2GridsDemoPage } from './app.po';

describe('ng2-grids-demo App', function() {
  let page: Ng2GridsDemoPage;

  beforeEach(() => {
    page = new Ng2GridsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
