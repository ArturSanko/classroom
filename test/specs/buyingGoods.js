const { loginCredentials } = require('../../Data/LoginCredentials');
const { searchItems } = require('../../Data/SearchItems');
const loginPageInteraction = require('../pageobjects/LoginPageInteraction');
const buyingInteraction = require('../pageobjects/BuyingInteraction');
var chai = require('chai');
const { links } = require('../../Data/Links');
const { properties } = require('../../Data/Properties');
var chaiWebdriver = require('chai-webdriverio').default;

describe('The user can make an order:', async function () {
  before(async function () {
    await loginPageInteraction.openURL(links.shop);
    await loginPageInteraction.loginIntoSystem(
      loginCredentials.login,
      loginCredentials.validPassword,
      5000
    );
  });

  it('drop down with categories of goods is displayed', async function () {
    await buyingInteraction.clickElement(buyingInteraction.searchField, 5000);
    await buyingInteraction.isDisplayed(buyingInteraction.dropDown);
  });

  it('the category is accepted. The category has white color of letters and blue background', async function () {
    await buyingInteraction.clickElement(buyingInteraction.categoryMen, 5000);
    const chosenCategory = await buyingInteraction.getElement(
      buyingInteraction.chosenCatagory,
      5000
    );
    await expect(chosenCategory).toHaveText(searchItems.chosenCategory);
    const color = await buyingInteraction.getCSSProperty(
      buyingInteraction.chosenCatagory,
      properties.color,
      5000
    );
    expect(await color.parsed.hex).toEqual(searchItems.color);
    const background = await buyingInteraction.getCSSProperty(
      buyingInteraction.chosenCatagory,
      properties.background,
      5000
    );
    expect(await background.parsed.hex).toEqual(searchItems.background);
  });

  it('the search item in search field is displayed', async function () {
    await buyingInteraction.inputText(
      buyingInteraction.searchField,
      searchItems.searchItem,
      5000
    );
    expect(buyingInteraction.searchField).toHaveText(searchItems.searchItem);
  });

  it('the store displayed search result page for the search item and filtered by the category', async function () {
    await buyingInteraction.pressEnter();
    const searchItem = await buyingInteraction.getElement(
      buyingInteraction.valueSearchItem,
      5000
    );
    await expect(searchItem).toHaveValue(searchItems.searchItem);
    const category = await buyingInteraction.getElement(
      buyingInteraction.textSearchCategory,
      5000
    );
    await expect(category).toHaveText(searchItems.chosenCategory);
  });

  it('page with chosen goods is opened', async function () {
    await buyingInteraction.clickOnSearchItem(
      buyingInteraction.allGoods,
      buyingInteraction.attr,
      searchItems.searchGoods,
      5000
    );
    const chosenCatagory = await buyingInteraction.getElement(
      buyingInteraction.chosenGoods,
      5000
    );
    await expect(chosenCatagory).toHaveText(searchItems.searchGoods);
  });

  it('shopping cart page is opened', async function () {
    await buyingInteraction.clickElement(
      buyingInteraction.buttonAddToCart,
      5000
    );
    const cartPage = await buyingInteraction.getElement(
      buyingInteraction.shoppingCartPage,
      5000
    );
    await expect(cartPage).toHaveText(searchItems.shoppingCartPage);
  });

  it('checkout confirmation page is opened', async function () {
    await buyingInteraction.clickElement(
      buyingInteraction.buttonCheckout,
      5000
    );
    const confirmPage = await buyingInteraction.getElement(
      buyingInteraction.checkoutConfirmationPage,
      5000
    );
    await expect(confirmPage).toHaveText(searchItems.checkoutConfirmationPage);
  });

  it('the order has been processed', async function () {
    await buyingInteraction.clickElement(
      buyingInteraction.buttonConfirmOrder,
      5000
    );
    const orderPage = await buyingInteraction.getElement(
      buyingInteraction.successedOrderMessage,
      5000
    );
    await expect(orderPage).toHaveText(searchItems.successedOrder);
  });
});
