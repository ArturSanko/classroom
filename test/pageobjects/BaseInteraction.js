class BaseInteraction {
  async openBrowserWithURL(url) {
    await browser.maximizeWindow();
    await browser.url(url);
  }

  async clickElement(selector) {
    await $(selector).isClickable();
    await $(selector).click();
  }

  async inputText(selector, text) {
    await this.waitForDisplayed(selector);
    await $(selector).addValue(text);
  }

  async waitForDisappear(selector) {
    await $(selector).waitForDisplayed({
      reverse: true,
      timeoutMsg: `The elememt: ${selector} was not disappear`,
    });
  }

  async waitForDisplayedWhithin(selector, timeout) {
    await $(selector).waitForDisplayed({
      timeout: timeout,
      timeoutMsg: `After ${timeout} ms the elememt: ${selector} was not displayed`,
    });
  }

  async waitForDisplayed(selector) {
    await $(selector).waitForDisplayed({
      timeoutMsg: `The elememt: ${selector} was not displayed`,
    });
  }

  async pressButton(button) {
    await browser.keys(button);
  }

  async clickOnSearchItem(selector, attr, nameItem) {
    await this.waitForDisplayed(selector);
    try {
      const allGoods = await $$(selector);
      let goodsTitle;
      for (const goods of allGoods) {
        goodsTitle = await goods.getAttribute(attr);
        if (goodsTitle === nameItem) {
          await goods.click();
        }
      }
      if (goodsTitle !== nameItem) {
        throw new Error(
          `clickOnSearchItem Error: Goods -> ${nameItem} was not found and clicked`
        );
      }
    } catch (e) {
      throw e;
    }
  }

  async isDisplayed(selector) {
    await $(selector).isDisplayed();
  }

  async getCSSProperty(selector, cssProperty) {
    await this.waitForDisplayed(selector);
    const property = await $(selector).getCSSProperty(cssProperty);
    return property;
  }

  async getElement(selector) {
    await this.waitForDisplayed(selector);
    const elem = await $(selector);
    return elem;
  }
}

module.exports = BaseInteraction;
