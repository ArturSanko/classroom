const BaseInteraction = require('./BaseInteraction');

class PageYaInteraction extends BaseInteraction {
  constructor() {
    super();
  }

  async openURL(url) {
    await this.openBrowserWithURL(url);
  }

  async getElement(selector) {
    const elem = await super.getElement(selector);
    return elem;
  }
}

module.exports = new PageYaInteraction();
