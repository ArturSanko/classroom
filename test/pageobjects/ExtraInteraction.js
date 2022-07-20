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
    this.confirmResult = '//*[text()="You clicked: Ok"]';
    this.promptResult = '//*[text()="You entered: text for prompt"]';

    this.boxA = '#column-a';
    this.boxB = '#column-b';

    this.elementForHover = '[alt^="User"]';
  }

  async openURL(url) {
    await this.openBrowserWithURL(url);
  }

  async clickButtonClickHere() {
    await this.clickElement(this.buttonForNewWindow);
  }

  async waitForDisplayedAnElementH3() {
    await this.waitForDisplayedAnElement(this.elementH3);
  }

  async switchFrame() {
    await browser.switchToFrame(0);
  }

  async inputTextIntoFieldIframe(text) {
    await super.inputTextIntoElement(this.fieldForTextIframe, text);
  }

  async getTextFromFieldIframe() {
    const elem = await $(this.fieldForTextIframe);
    return elem;
  }

  async clickButtonAlert() {
    await this.clickElement(this.buttonAlert);
  }

  async getTextFromAlertResult() {
    await this.waitForDisplayedAnElement(this.alertResult);
    const elem = await $(this.alertResult);
    return elem;
  }

  async clickButtonConfirm() {
    await this.clickElement(this.buttonConfirm);
  }

  async getTextFromConfirmResult() {
    await this.waitForDisplayedAnElement(this.confirmResult);
    const elem = await $(this.confirmResult);
    return elem;
  }

  async clickButtonPrompt() {
    await this.clickElement(this.buttonPrompt);
  }

  async getTextFromPromptResult() {
    await this.waitForDisplayedAnElement(this.promptResult);
    const elem = await $(this.promptResult);
    return elem;
  }

  inputTextIntoPrompt(text) {
    browser.sendAlertText(text);
  }

  async dragAndDropBoxA() {
    await this.dragAndDropElement(this.boxA, this.boxB);
  }

  async dragAndDropBoxB() {
    await this.dragAndDropElement(this.boxB, this.boxA);
  }

  async hoverOverElement(){
    super.hoverOverElement(this.elementForHover)
  }
}

module.exports = new ExtraInteraction();
