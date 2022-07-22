const BaseInteraction = require('./BaseInteraction');

class BuyingInteraction extends BaseInteraction {
  constructor() {
    super();
    this.searchField = '#filter_keyword';
    this.categoryMen = '#category_58';
    this.buttonEnter = 'Enter';
    this.goods = '[title="MAN Eau de Toilette Spray"]';
    this.buttonAddToCart = '.cart';
    this.buttonCheckout = '#cart_checkout1';
    this.buttonConfirmOrder = '#checkout_btn';
    this.successedOrderMessage = '.maintext';

    this.allGoods = '.fixed a';
    this.attr = 'title';

    this.dropDown = '#search-category';
    this.chosenCatagory = '#category_selected';
    this.valueSearchItem = 'input#keyword';
    this.textSearchCategory =
      '//select[@id="category_id"]/option[@selected="selected"][contains(text(), "Men")]';
    this.chosenGoods = '//span[contains(text(), "MAN Eau de Toilette Spray")]';
    this.shoppingCartPage = '//span[contains(text(), "Shopping Cart")]';
    this.checkoutConfirmationPage =
      '//span[contains(text(), "Checkout Confirmation")]';
  }

  async clickOnSearchField() {
    await this.clickElement(this.searchField);
  }

  async clickOnCategory() {
    await this.clickElement(this.categoryMen);
  }

  async inputSearchItem(item) {
    await this.inputTextIntoElement(this.searchField, item);
  }

  async pressEnter() {
    await this.pressButton(this.buttonEnter);
  }

  async clickOnGoods() {
    await this.clickElement(this.goods);
  }

  async clickButtonAddToCart() {
    await this.clickElement(this.buttonAddToCart);
  }

  async clickButtonCheckout() {
    await this.clickElement(this.buttonCheckout);
  }

  async clickButtonConfirmOrder() {
    await this.clickElement(this.buttonConfirmOrder);
  }

  async getTextFromSuccessOrderPage() {
    const elem = await $(this.successedOrderMessage);
    return elem;
  }

  async searchCertainItem(nameItem) {
    await super.searchCertainItem(this.allGoods, this.attr, nameItem);
  }

  async isDisplayedDropDown() {
    await this.isDisplayed(this.dropDown);
  }

  async getCSSPropertyOfCatagoryBackground() {
    const property = await this.getCSSProperty(
      this.chosenCatagory,
      'background-color'
    );
    return property;
  }

  async getCSSPropertyOfCatagoryColor() {
    const property = await this.getCSSProperty(this.chosenCatagory, 'color');
    return property;
  }

  async getElementCatagory() {
    const elem = await this.getElement(this.chosenCatagory);
    return elem;
  }

  async getValueOfSearchItem() {
    const value = await this.getElement(this.valueSearchItem);
    return value;
  }

  async getElementSearchCatagery() {
    const elem = await this.getElement(this.textSearchCategory);
    return elem;
  }

  async getElementChosenGood() {
    const elem = await this.getElement(this.chosenGoods);
    return elem;
  }

  async getElementShoppingCartPage() {
    const elem = await this.getElement(this.shoppingCartPage);
    return elem;
  }

  async getElementCheckoutConfirmationPage() {
    const elem = await this.getElement(this.checkoutConfirmationPage);
    return elem;
  }

  async getElementSuccessOrderPage() {
    const text = await this.getElement(this.successedOrderMessage);
    return text;
  }
}

module.exports = new BuyingInteraction();
