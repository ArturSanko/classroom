const BaseInteraction = require('./BaseInteraction');

class BuyingInteraction extends BaseInteraction {
  constructor() {
    super();
    this.buttonEnter = 'Enter';
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
