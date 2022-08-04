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

    this.banner = '.slider';
    this.hideElementScript = 'document.querySelector(arguments[0]).hidden = true';
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
    await this.waitForDisplayed(this.accountLoginPage);

  }

  async deleteCookies() {
    await super.deleteCookies();
  }

  async execute(script, argument0, argument1) {
    await super.execute(script, argument0, argument1);
  }
}

module.exports = new LoginPageInteraction();
