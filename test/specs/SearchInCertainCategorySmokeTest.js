const { loginCredentials } = require('../../Data/LoginCredentials');
const { searchItems } = require('../../Data/SearchItems');
const loginPageInteraction = require('../pageobjects/LoginPageInteraction');
const buyingInteraction = require('../pageobjects/BuyingInteraction');
var chai = require('chai');
const { links } = require('../../Data/Links');
const { selectors } = require('../../Data/Selectors');
const { properties } = require('../../Data/Properties');
var chaiWebdriver = require('chai-webdriverio').default;

describe('The user can make an order:', async function () {
  before(async function () {
    await loginPageInteraction.openURL(links.shop);
    await loginPageInteraction.loginIntoSystem(
      loginCredentials.login,
      loginCredentials.validPassword
    );
  });

  it('drop down with categories of goods is displayed', async function () {
    await buyingInteraction.clickElement(selectors.searchField);
    await buyingInteraction.isDisplayed(selectors.dropDown);
  });

  it('the category is accepted. The category has white color of letters and blue background', async function () {
    await buyingInteraction.clickElement(selectors.categoryMen);
    const chosenCategory = await buyingInteraction.getElement(
      selectors.chosenCatagory
    );
    await expect(chosenCategory).toHaveText(searchItems.chosenCategory);
    const color = await buyingInteraction.getCSSProperty(
      selectors.chosenCatagory,
      properties.color
    );
    expect(await color.parsed.hex).toEqual(searchItems.color);
    const background = await buyingInteraction.getCSSProperty(
      selectors.chosenCatagory,
      properties.background
    );
  });

  it('the search item in search field is displayed', async function () {
    await buyingInteraction.inputText(
      selectors.searchField,
      searchItems.searchItem
    );
  });

  it('the store displayed search result page for the search item and filtered by the category', async function () {
    await buyingInteraction.pressEnter();
    const valueOfItem = await buyingInteraction.getElement(
      selectors.valueSearchItem
    );
    await expect(valueOfItem).toHaveValue(searchItems.searchItem);
    const searchItem = await buyingInteraction.getElement(
      selectors.textSearchCategory
    );
    await expect(searchItem).toHaveText(searchItems.chosenCategory);
  });

  it('page with chosen goods is opened', async function () {
    await buyingInteraction.searchCertainItem(
      selectors.allGoods,
      selectors.attr,
      searchItems.searchGoods
    );
    const chosenCatagory = await buyingInteraction.getElement(
      selectors.chosenGoods
    );
    await expect(chosenCatagory).toHaveText(searchItems.searchGoods);
  });

  it('shopping cart page is opened', async function () {
    await buyingInteraction.clickElement(selectors.buttonAddToCart);
    const cartPage = await buyingInteraction.getElement(
      selectors.shoppingCartPage
    );
    await expect(cartPage).toHaveText(searchItems.shoppingCartPage);
  });

  it('checkout confirmation page is opened', async function () {
    await buyingInteraction.clickElement(selectors.buttonCheckout);
    const confirmPage = await buyingInteraction.getElement(
      selectors.checkoutConfirmationPage
    );
    await expect(confirmPage).toHaveText(searchItems.checkoutConfirmationPage);
  });

  it('the order has been processed', async function () {
    await buyingInteraction.clickElement(selectors.buttonConfirmOrder);
    const orderPage = await buyingInteraction.getElement(
      selectors.successedOrderMessage
    );
    await expect(orderPage).toHaveText(searchItems.successedOrder);
  });
});
