const BaseInteraction = require('./BaseInteraction');

class BuyingInteraction extends BaseInteraction {
  constructor() {
    super();

    this.searchField = '#filter_keyword';
    this.categoryMen = '#category_58';
    this.buttonEnter = 'Enter';
    this.goods = '//*[@class="fixed"]/*[text()="MAN Eau de Toilette Spray"]';
    this.buttonAddToCart = '//*[@class="cart"]';
    this.buttonCheckout = '#cart_checkout1';
    this.buttonConfirmOrder = '#checkout_btn';

    this.successedOrderMessage = '//*[@class="maintext"]';
  }

  async clickOnSearchField() {
    await this.waitForDisplayedAnElement(this.searchField);
    await this.clickElement(this.searchField);
  }

  async clickOnCategory() {
    await this.waitForDisplayedAnElement(this.categoryMen);
    await this.clickElement(this.categoryMen);
  }

  async inputSearchItem(item) {
    await this.waitForDisplayedAnElement(this.searchField);
    await this.inputTextIntoElement(this.searchField, item);
  }

  async pressEnter() {
    await this.pressButton(this.buttonEnter);
  }

  async clickOnGoods() {
    await this.waitForDisplayedAnElement(this.goods);
    await this.clickElement(this.goods);
  }

  async clickButtonAddToCart() {
    await this.waitForDisplayedAnElement(this.buttonAddToCart);
    await this.clickElement(this.buttonAddToCart);
  }

  async clickButtonCheckout() {
    await this.waitForDisplayedAnElement(this.buttonCheckout);
    await this.clickElement(this.buttonCheckout);
  }

  async clickButtonConfirmOrder() {
    await this.waitForDisplayedAnElement(this.buttonConfirmOrder);
    await this.clickElement(this.buttonConfirmOrder);
  }

  async getTextFromSuccessOrderPage() {
    const elem = await $(this.successedOrderMessage);
    return elem;
  }
}

module.exports = new BuyingInteraction();
