class BaseInteraction {
  async openBrowserWithURL(url) {
    await browser.maximizeWindow();
    await browser.url(url);
  }

  async clickElement(selector) {
    await this.waitForDisplayedAnElement(selector);
    await $(selector).click();
  }

  async inputTextIntoElement(selector, text) {
    await this.waitForDisplayedAnElement(selector);
    await $(selector).addValue(text);
  }

  async waitForDisappearAnElement(selector) {
    await $(selector).waitForDisplayed({
      timeout: 6000,
      reverse: true,
      timeoutMsg: `After 6 sec the elememt: ${selector} was not disappear`,
    });
  }

  async waitForDisplayedAnElement(selector) {
    await $(selector).waitForDisplayed({
      timeout: 6000,
      timeoutMsg: `After 6 sec the elememt: ${selector} was not displayed`,
    });
  }

  async pressButton(button) {
    await browser.keys(button);
  }

  async searchCertainItem(selector, attr, nameItem) {
    await this.waitForDisplayedAnElement(selector);
    const allGoods = await $$(selector);
    for (const goods of allGoods) {
      const goodsTitle = await goods.getAttribute(attr);
      if (goodsTitle === nameItem) {
        await goods.click();
      }
    }
  }

  async dragAndDropElement(from, to) {
    const fromPosition = await $(from);
    const toPosition = await $(to);
    await fromPosition.dragAndDrop(toPosition);
  }

  async hoverOverElements(selector) {
    await this.waitForDisplayedAnElement(selector);
    const elements = await $$(selector);
    for (const element of elements) {
      await element.moveTo();
    }
  }

  async isDisplayed(selector) {
    await $(selector).isDisplayed();
  }

  async getCSSProperty(selector, cssProperty) {
    await this.waitForDisplayedAnElement(selector);
    const property = await $(selector).getCSSProperty(cssProperty);
    return property;
  }

  async getElement(selector) {
    await this.waitForDisplayedAnElement(selector);
    const elem = await $(selector);
    return elem;
  }
}

module.exports = BaseInteraction;
