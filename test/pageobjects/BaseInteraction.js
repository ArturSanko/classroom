class BaseInteraction {
  async openBrowserWithURL(url) {
    await browser.maximizeWindow();
    await browser.url(url);
  }

  async clickElement(selector) {
    await $(selector).click();
  }

  async inputTextIntoElement(selector, text) {
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

    async isDisplayed(selector) {
    await $(selector).isDisplayed();
  }

  async getCSSProperty(selector, cssProperty) {
    await $(selector).getCSSProperty(cssProperty);
  }

  async getElement(selector) {
    const elem = await $(selector);
    return elem;
  }
}

module.exports = BaseInteraction;
