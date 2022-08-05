const BaseInteraction = require('./BaseInteraction');

class BuyingInteraction extends BaseInteraction {
  constructor() {
    super();
    this.buttonEnter = 'Enter';

    this.searchField = '#filter_keyword';
    this.categoryMen = '#category_58';
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
    this.checkoutConfirmationPage = '//span[contains(text(), "Checkout Confirmation")]';
  }

  async clickElement(selector, timeout) {
    await super.clickElement(selector, timeout);
  }

  async inputText(selector, text, timeout) {
    await super.inputText(selector, text, timeout);
  }

  async pressEnter() {
    await this.pressButton(this.buttonEnter);
  }

  async clickOnSearchItem(goods, attr, nameItem, timeout) {
    await super.clickOnSearchItem(goods, attr, nameItem, timeout);
  }

  async isDisplayed(selector) {
    await super.isDisplayed(selector);
  }

  async getCSSProperty(selector, prop, timeout) {
    const property = await super.getCSSProperty(selector, prop, timeout);
    return property;
  }

  async getElement(selector, timeout) {
    const elem = await super.getElement(selector, timeout);
    return elem;
  }
}

module.exports = new BuyingInteraction();
