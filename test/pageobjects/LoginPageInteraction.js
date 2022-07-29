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

  async clickElement(selector) {
    await super.clickElement(selector);
  }

  async inputText(selector, data) {
    await super.inputText(selector, data);
  }

  async waitForDisplayed(selector) {
    await super.waitForDisplayed(selector);
  }

  async loginIntoSystem(login, password) {
    await this.clickElement(this.buttonLoginOrRegister);
    await this.waitForDisplayed(this.accountLoginPage);
    await this.inputText(this.loginNameField, login);
    await this.inputText(this.passwordField, password);
    await this.clickElement(this.buttonLogin);
  }
}

module.exports = new LoginPageInteraction();
