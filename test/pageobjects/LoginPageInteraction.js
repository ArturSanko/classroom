const BaseInteraction = require('./BaseInteraction');

class LoginPageInteraction extends BaseInteraction {
  constructor() {
    super();
    this.url = 'https://automationteststore.com/';
    this.buttonLoginOrRegister = '//*[text()="Login or register"]';
    this.loginNameField = '#loginFrm_loginname';
    this.passwordField = '#loginFrm_password';
    this.buttonLogin = '[title="Login"]';
    this.userName = '//*[text()="Welcome back Name"]';
    this.errorMessage = '[class^="alert"]';
    this.accountLoginPage = '.maintext';
  }

  async openURL(url) {
    await this.openBrowserWithURL(url);
  }

  async clickElement(selector, timeout) {
    await super.clickElement(selector, timeout);
  }

  async inputText(selector, data, timeout) {
    await super.inputText(selector, data, timeout);
  }

  async waitForDisplayedWhithin(selector, timeout) {
    await super.waitForDisplayedWhithin(selector, timeout);
  }

  async loginIntoSystem(login, password, timeout) {
    await this.clickElement(this.buttonLoginOrRegister, timeout);
    await this.waitForDisplayedWhithin(this.accountLoginPage, timeout);
    await this.inputText(this.loginNameField, login, timeout);
    await this.inputText(this.passwordField, password, timeout);
    await this.clickElement(this.buttonLogin, timeout);
  }
}

module.exports = new LoginPageInteraction();
