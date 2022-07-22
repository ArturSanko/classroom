const { loginCredentials } = require('../../Data/LoginCredentials');
const { searchItems } = require('../../Data/SearchItems');
const loginPageInteraction = require('../pageobjects/LoginPageInteraction');
const buyingInteraction = require('../pageobjects/BuyingInteraction');
var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;

describe('The user can make an order:', async function () {
  before(async function () {
    await loginPageInteraction.openURL();
    await loginPageInteraction.loginIntoSystem(
      loginCredentials.login,
      loginCredentials.validPassword
    );
  });

  it('drop down with categories of goods is displayed', async function () {
    await buyingInteraction.clickOnSearchField();
    await buyingInteraction.isDisplayedDropDown();
  });

  it('the category is accepted. The category has white color of letters and blue background', async function () {
    await buyingInteraction.clickOnCategory();
    await expect(
      await buyingInteraction.getElementCatagory()
    ).toHaveTextContaining(searchItems.chosenCategory);
    const color = await buyingInteraction.getCSSPropertyOfCatagoryColor();
    expect(await color.parsed.hex).toEqual(searchItems.color);
    const background =
      await buyingInteraction.getCSSPropertyOfCatagoryBackground();
    expect(await background.parsed.hex).toEqual(searchItems.background);
  });

  it('the search item in search field is displayed', async function () {
    await buyingInteraction.inputSearchItem(searchItems.searchItem);
  });

  it('the store displayed search result page for the search item and filtered by the category', async function () {
    await buyingInteraction.pressEnter();
    await expect(await buyingInteraction.getValueOfSearchItem()).toHaveValue(
      searchItems.searchItem
    );
    await expect(await buyingInteraction.getElementSearchCatagery()).toHaveText(
      searchItems.chosenCategory
    );
  });

  it('page with chosen goods is opened', async function () {
    await buyingInteraction.searchCertainItem(searchItems.searchGoods);
    await expect(
      await buyingInteraction.getElementChosenGood()
    ).toHaveTextContaining(searchItems.searchGoods);
  });

  it('shopping cart page is opened', async function () {
    await buyingInteraction.clickButtonAddToCart();
    await expect(
      await buyingInteraction.getElementShoppingCartPage()
    ).toHaveTextContaining(searchItems.shoppingCartPage);
  });

  it('checkout confirmation page is opened', async function () {
    await buyingInteraction.clickButtonCheckout();
    await expect(
      await buyingInteraction.getElementCheckoutConfirmationPage()
    ).toHaveTextContaining(searchItems.checkoutConfirmationPage);
  });

  it('the order has been processed', async function () {
    await buyingInteraction.clickButtonConfirmOrder();
    await expect(
      await buyingInteraction.getElementSuccessOrderPage()
    ).toHaveText(searchItems.successedOrder);
  });
});
