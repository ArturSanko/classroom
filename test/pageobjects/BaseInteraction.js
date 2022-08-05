const fs = require('fs');
const path = require('path');

class BaseInteraction {
  async openBrowserWithURL(url) {
    await browser.maximizeWindow();
    await browser.url(url);
  }

  async clickElement(selector, timeout) {
    await this.waitForDisplayedWhithin(selector, timeout);
    await $(selector).click();
  }

  async inputText(selector, text, timeout) {
    await this.waitForDisplayedWhithin(selector, timeout);
    await $(selector).addValue(text);
  }

  async waitForDisappear(selector, timeout) {
    await $(selector).waitForDisplayedWhithin({
      timeout: timeout,
      reverse: true,
      timeoutMsg: `After ${timeout} ms the elememt: ${selector} was not disappear`,
    });
  }

  async waitForDisplayedWhithin(selector, timeout) {
    await $(selector).waitForDisplayed({
      timeout: timeout,
      timeoutMsg: `After ${timeout} ms the elememt: ${selector} was not displayed`,
    });
  }

  async pressButton(button) {
    await browser.keys(button);
  }

  async clickOnSearchItem(selector, attr, nameItem, timeout) {
    await this.waitForDisplayedWhithin(selector, timeout);
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

  async getCSSProperty(selector, cssProperty, timeout) {
    await this.waitForDisplayedWhithin(selector, timeout);
    const property = await $(selector).getCSSProperty(cssProperty);
    return property;
  }

  async getElement(selector, timeout) {
    await this.waitForDisplayedWhithin(selector, timeout);
    const elem = await $(selector);
    return elem;
  }
}

module.exports = BaseInteraction;
