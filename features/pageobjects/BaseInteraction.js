class BaseInteraction {
  async openBrowserWithURL(url) {
    await browser.maximizeWindow();
    await browser.url(url);
  }

  async clickElement(selector) {
    await this.verifyElementCondition(selector, 'isClickable');
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

  async waitForDisplayed(selector) {
    await $(selector).waitForDisplayed({
      timeoutMsg: `The elememt: ${selector} was not displayed`,
    });
  }

  async waitForDisplayedWhithin(selector, timeout) {
    await $(selector).waitForDisplayed({
      timeout: timeout,
      timeoutMsg: `After ${timeout} ms the elememt: ${selector} was not displayed`,
    });
  }

  async deleteCookies() {
    await browser.deleteCookies();
  }

  async verifyElementCondition(selector, method) {
    switch (method) {
      case 'isClickable':
        $(selector).isClickable();
        break;
      case 'isDisplayed':
        $(selector).isDisplayed();
        break;
      case 'isDisplayedInViewport':
        $(selector).isDisplayedInViewport();
        break;
      case 'isEnabled':
        $(selector).isEnabled();
        break;
      case 'isEqual':
        $(selector).isEqual();
        break;
      case 'isExisting':
        $(selector).isExisting();
        break;
      case 'isFocused':
        $(selector).isFocused();
        break;
      case 'isSelected':
        $(selector).isSelected();
        break;
      default:
        throw new Error(
          `verifyElementCondition Error: Method -> ${method} was not found`
        );
    }
  }

  async getElement(selector) {
    await this.waitForDisplayed(selector);
    const elem = await $(selector);
    return elem;
  }
}

module.exports = BaseInteraction;
