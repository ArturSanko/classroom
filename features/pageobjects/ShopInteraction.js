const BaseInteraction = require('./BaseInteraction');

class ShopInteraction extends BaseInteraction {
  constructor() {
    super();
    this.allBookCards = '[class^="thumbnails grid"] img';
  }

  async clickMenuItem(item) {
    await this.clickElement(
      `//ul[@class="nav-pills categorymenu"]//a[contains(text(), "${item}")]`
    );
  }

  async getElement(selector) {
    const elem = await super.getElement(selector);
    return elem;
  }

  async checkShoppingCardItemImages(formJSON) {
    const objCards = JSON.parse(formJSON).dataCards;

    const allBookCards = await $$(this.allBookCards);

    for (const book of allBookCards) {
      for (const cardData in objCards) {
        for (const keyData in objCards[cardData]) {
          const bookAttr = await book.getAttribute(keyData);
          if (bookAttr === objCards[cardData][keyData]) {
            continue;
          }
        }
      }
    }
  }
}

module.exports = new ShopInteraction();
