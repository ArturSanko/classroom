const fs = require('fs');
const path = require('path');

const { constants } = require('fs');

class BaseInteraction {
  async openBrowserWithURL(url) {
    await browser.maximizeWindow();
    await browser.url(url);
  }

  async clickElement(selector) {
    await this.waitForDisplayed(selector);
    await $(selector).click();
  }

  async inputText(selector, text) {
    await this.waitForDisplayed(selector);
    await $(selector).addValue(text);
  }

  async waitForDisappear(selector) {
    await $(selector).waitForDisplayed({
      timeout: 6000,
      reverse: true,
      timeoutMsg: `After 6 sec the elememt: ${selector} was not disappear`,
    });
  }

  async waitForDisplayed(selector) {
    await $(selector).waitForDisplayed({
      timeout: 6000,
      timeoutMsg: `After 6 sec the elememt: ${selector} was not displayed`,
    });
  }

  async pressButton(button) {
    await browser.keys(button);
  }

  async searchCertainItem(selector, attr, nameItem) {
    await this.waitForDisplayed(selector);
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
    await this.waitForDisplayed(selector);
    const elements = await $$(selector);
    for (const element of elements) {
      await element.moveTo();
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

  //change
  async waitUntilFileDownload(fileName) {
    await browser.waitUntil(
      async function () {
        return fs.existsSync(`${fileName}`);
      },
      {
        timeout: 6000,
        timeoutMsg: 'file does not exist',
      }
    );
  }

  async uploadFile(pathToFile, selector) {
    const filePath = path.join(__dirname, pathToFile);
    const file = await browser.uploadFile(filePath);
    await $(selector).setValue(file);
  }
}

module.exports = BaseInteraction;
