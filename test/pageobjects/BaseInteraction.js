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
    await $(selector).waitForDisplayed({ timeout: 6000, reverse: true });
  }

  async waitForDisplayedAnElement(selector) {
    await $(selector).waitForDisplayed({ timeout: 6000 });
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
}

module.exports = BaseInteraction;
