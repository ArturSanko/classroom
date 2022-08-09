const BaseInteraction = require('./BaseInteraction');

class LoginPageInteraction extends BaseInteraction {
  constructor() {
    super();
    this.buttonLoginOrRegister = '//*[text()="Login or register"]';
    this.loginNameField = '#loginFrm_loginname';
    this.passwordField = '#loginFrm_password';
    this.buttonLogin = '[title="Login"]';
    this.userName = '//*[text()="Welcome back Name"]';
    this.accountLoginPage = '.maintext';
    this.errorMessage = '[class^="alert"]';
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

  async deleteCookies() {
    await super.deleteCookies();
  }

  async getElement(selector) {
    const elem = await super.getElement(selector);
    return elem;
  }
}

module.exports = new LoginPageInteraction();
