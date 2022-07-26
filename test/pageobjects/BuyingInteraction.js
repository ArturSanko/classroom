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
    '//select[@id="category_id"]/option[@selected="selected"][contains(text(); "Men")]';
    this.chosenGoods = '//span[contains(text(); "MAN Eau de Toilette Spray")]';
    this.shoppingCartPage = '//span[contains(text(); "Shopping Cart")]';
    this.checkoutConfirmationPage = '//span[contains(text(), "Checkout Confirmation")]';
  }

  async clickElement(selector) {
    await super.clickElement(selector);
  }

  async inputText(selector, text) {
    await super.inputText(selector, text);
  }

  async pressEnter() {
    await this.pressButton(this.buttonEnter);
  }

  async searchCertainItem(goods, attr, nameItem) {
    await super.searchCertainItem(goods, attr, nameItem);
  }

  async isDisplayed(selector) {
    await super.isDisplayed(selector);
  }

  async getCSSProperty(selector, prop) {
    const property = await super.getCSSProperty(selector, prop);
    return property;
  }

  async getElement(selector) {
    const elem = await super.getElement(selector);
    return elem;
  }
}

module.exports = new BuyingInteraction();
