const BaseInteraction = require('./BaseInteraction');
const loginCredentials = require('../data/loginCredentials.js');
const LoginCredentialsClass = require('../data/LoginCredentialsClass.js');

class LoginPageInteraction extends BaseInteraction {
  constructor() {
    super();
    this.buttonLoginOrRegister = '//*[text()="Login or register"]';
    this.loginNameField = '#loginFrm_loginname';
    this.passwordField = '#loginFrm_password';
    this.buttonLogin = '[title="Login"]';
    this.accountLoginPage = '.maintext';
    this.errorMessage = '[class^="alert"]';
    this.userName = 'div[class^="menu"]';
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

  async loginIntoSystem(username, password) {
    await this.clickElement(this.buttonLoginOrRegister);
    await this.waitForDisplayed(this.accountLoginPage);
    await this.inputText(this.loginNameField, username);
    await this.inputText(this.passwordField, password);
    await this.clickElement(this.buttonLogin);
  }

  async loginIntoSystemThroughSwitch(user) {
    await this.clickElement(this.buttonLoginOrRegister);
    await this.waitForDisplayed(this.accountLoginPage);
    switch (user) {
      case 'positiveUser':
        await this.inputText(
          this.loginNameField,
          LoginCredentialsClass.positiveUserLogin
        );
        await this.inputText(
          this.passwordField,
          LoginCredentialsClass.positiveUserPassword
        );
        await this.clickElement(this.buttonLogin);
        break;
      case 'negativeUser':
        await this.inputText(
          this.loginNameField,
          LoginCredentialsClass.negativeUserLogin
        );
        await this.inputText(
          this.passwordField,
          LoginCredentialsClass.negativeUserPassword
        );
        await this.clickElement(this.buttonLogin);
        break;
    }
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
