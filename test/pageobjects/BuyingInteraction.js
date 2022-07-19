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
}

module.exports = new BuyingInteraction();
