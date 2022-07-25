const BaseInteraction = require('./BaseInteraction');

class ExtraInteraction extends BaseInteraction {
  constructor() {
    super();
  }

  async openURL(url) {
    await this.openBrowserWithURL(url);
  }

  async waitForDisplayed(selector) {
    await super.waitForDisplayed(selector);
  }

  async inputText(selector, text) {
    await super.inputText(selector, text);
  }

  async switchFrame() {
    await browser.switchToFrame(0);
  }

  async getElement(selector) {
    const elem = await super.getElement(selector);
    return elem;
  }

  async inputTextIntoPrompt(text) {
    await browser.sendAlertText(text);
  }

  async dragAndDropBox(from, to) {
    await this.dragAndDropElement(from, to);
  }

  async hoverOverElements(selector) {
    super.hoverOverElements(selector);
  }

  async getCookies() {
    const allCookies = await browser.getCookies();
    return allCookies;
  }

  //change
  async downloadPNGFile() {
    await this.clickElement(this.fileForDownload);
  }

  //change
  async waitUntilFileDownload() {
    await super.waitUntilFileDownload(this.downloadedFile);
  }

  async uploadFile(path, selector) {
    await super.uploadFile(path, selector);
  }

  async clickButton(selector) {
    await this.clickElement(selector);
  }
}

module.exports = new ExtraInteraction();
