const { loginCredentials } = require('../../Data/LoginCredentials');
const { searchItems } = require('../../Data/SearchItems');
const loginPageInteraction = require('../pageobjects/LoginPageInteraction');
const buyingInteraction = require('../pageobjects/BuyingInteraction');
// const { expect } = require('chai');
var expect = require('chai').expect;
var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;

describe('Buying goods', function () {
  before(async function () {
    await loginPageInteraction.openURL();
    await loginPageInteraction.clickButtonLoginOrRegister();
    await loginPageInteraction.inputLogin(loginCredentials.login);
    await loginPageInteraction.inputPassword(loginCredentials.validPassword);
    await loginPageInteraction.clickButtonLogin();
    await loginPageInteraction.waitForDisappearLoginButton();
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

    // const color = await buyingInteraction.getCSSPropertyOfCatagoryColor();
    const color = await $('#category_selected').getCSSProperty('color');
    // const color = await $('#category_selected');
    // console.log('color: ' + JSON.stringify(color));
    // console.log('color_parsed-hex: ' + color.parsed.hex);

    await expect(color.parsed.hex).to.equal(searchItems.color);

    // const background =
    //   await buyingInteraction.getCSSPropertyOfCatagoryBackground();
    // const background = await $('#category_selected').getCSSProperty(
    //   'background-color'
    // );
    // console.log('background-color: ' + JSON.stringify(background));
    // console.log('background-color_parsed-hex: ' + background.parsed.hex);

    // await expect(background.parsed.hex).toHaveElementProperty(searchItems.background);
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
    await buyingInteraction.clickOnGoods();
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
      await await buyingInteraction.getElementCheckoutConfirmationPage()
    ).toHaveTextContaining(searchItems.checkoutConfirmationPage);
  });

  it('the order has been processed', async function () {
    await buyingInteraction.clickButtonConfirmOrder();
    await expect(
      await await buyingInteraction.getElementSuccessOrderPage()
    ).toHaveText(searchItems.successedOrder);
  });
});
