const BaseInteraction = require('./BaseInteraction');

class ExtraInteraction extends BaseInteraction {
  constructor() {
    super();
    this.buttonForNewWindow = '//*[text()="Click Here"]';

    this.fieldForTextIframe = '#tinymce';
    this.elementH3 = '.example';
  }

  async openURL(url) {
    await this.openBrowserWithURL(url);
  }

  async clickButtonClickHere() {
    await this.waitForDisplayedAnElement(this.buttonForNewWindow);
    await this.clickElement(this.buttonForNewWindow);
  }

  async waitForDisplayedAnElementH3() {
    await this.waitForDisplayedAnElement(this.elementH3);
  }

  async switchFrame() {
    await browser.switchToFrame(0);
  }

  async inputTextIntoFieldIframe(text) {
    await this.waitForDisplayedAnElement(this.fieldForTextIframe);
    await super.inputTextIntoElement(this.fieldForTextIframe, text);
  }

  async getTextFromFieldIframe() {
    const elem = await $(this.fieldForTextIframe);
    return elem;
  }
}

module.exports = new ExtraInteraction();
