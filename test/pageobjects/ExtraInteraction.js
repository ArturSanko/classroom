const BaseInteraction = require('./BaseInteraction');

class ExtraInteraction extends BaseInteraction {
  constructor() {
    super();
    this.buttonForNewWindow = '//*[text()="Click Here"]';
  }

  async openURL(url) {
    await this.openBrowserWithURL(url);
  }

  async clickButtonClickHere() {
    await this.waitForDisplayedAnElement(this.buttonForNewWindow);
    await this.clickElement(this.buttonForNewWindow);
  }
}

module.exports = new ExtraInteraction();
