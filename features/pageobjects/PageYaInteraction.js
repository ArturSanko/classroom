const BaseInteraction = require('./BaseInteraction');

class PageYaInteraction extends BaseInteraction {
  constructor() {
    super();
  }

  async getElement(selector) {
    const elem = await super.getElement(selector);
    return elem;
  }
}

module.exports = new PageYaInteraction();
