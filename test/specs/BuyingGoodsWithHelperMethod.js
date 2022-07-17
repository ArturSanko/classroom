const { loginCredentials } = require('../../Data/LoginCredentials');
const { searchItems } = require('../../Data/SearchItems');
const loginPageInteraction = require('../pageobjects/LoginPageInteraction');
const buyingInteraction = require('../pageobjects/BuyingInteraction');

describe('Buying goods', function () {
  before(async function () {
    await loginPageInteraction.openURL();
    await loginPageInteraction.loginIntoSystem(
      loginCredentials.login,
      loginCredentials.validPassword
    );
    await buyingInteraction.clickOnSearchField();
    await buyingInteraction.clickOnCategory();
    await buyingInteraction.inputSearchItem(searchItems.searchItem);
    await buyingInteraction.pressEnter();
    await buyingInteraction.clickOnGoods();
    await buyingInteraction.clickButtonAddToCart();
    await buyingInteraction.clickButtonCheckout();
    await buyingInteraction.clickButtonConfirmOrder();
  });

  it('user have to get message about successed order', async function () {
    await expect(
      await buyingInteraction.getTextFromSuccessOrderPage()
    ).toHaveTextContaining(searchItems.successedOrder);
  });
});
