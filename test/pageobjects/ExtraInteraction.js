const BaseInteraction = require('./BaseInteraction');

class ExtraInteraction extends BaseInteraction {
  constructor() {
    super();
    this.buttonForNewWindow = '//*[text()="Click Here"]';

    this.fieldForTextIframe = '#tinymce';
    this.elementH3 = '.example';

    this.buttonAlert = '[onclick="jsAlert()"]';
    this.buttonConfirm = '[onclick="jsConfirm()"]';
    this.buttonPrompt = '[onclick="jsPrompt()"]';
    this.alertResult = '//*[text()="You successfully clicked an alert"]';
    this.confirmResult = '//*[text()="You clicked= Ok"]';
    this.promptResult = '//*[text()="You entered= text for prompt"]';

    this.boxA = '#column-a';
    this.boxB = '#column-b';

    this.elementForHover = '[alt^="User"]';

    this.fileForDownload = '.example > a=nth-child(4)';

    this.buttonChooseFile = '#file-upload';
    this.buttonUpload = '#file-submit';
    this.uploadedFile = '#uploaded-files';

    this.buttonStart = '#start > button';
    this.loadingLine = '.example > #loading';
    this.finishLoading = '.example > #finish';

    this.banner = '.slider';
    this.hiddenText = '.welcome_msg';
    this.buttonCart = '#main_menu_top > [data-id$="cart"] > a';
    this.searchField = 'div >#filter_keyword';
    this.cartPage = '//span[contains(text(), "Shopping Cart")]';
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

  async switchFrame(id) {
    await browser.switchToFrame(id);
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

  async isDisplayed(selector) {
    await super.isDisplayed(selector);
  }

  async waitForDisappear(selector) {
    await super.waitForDisappear(selector);
  }

  async execute(script, argument0, argument1) {
    await super.execute(script, argument0, argument1);
  }
}

module.exports = new ExtraInteraction();
