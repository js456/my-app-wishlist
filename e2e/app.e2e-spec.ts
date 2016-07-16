import { MyAppWishlistPage } from './app.po';

describe('my-app-wishlist App', function() {
  let page: MyAppWishlistPage;

  beforeEach(() => {
    page = new MyAppWishlistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
