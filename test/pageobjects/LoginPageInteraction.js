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
  }

  async openURL() {
    await this.openBrowserWithURL(this.url);
  }

  async clickButtonLoginOrRegister() {
    await this.clickElement(this.buttonLoginOrRegister);
  }

  async inputLogin(data) {
    await this.inputTextIntoElement(this.loginNameField, data);
  }

  async inputPassword(data) {
    await this.inputTextIntoElement(this.passwordField, data);
  }

  async clickButtonLogin() {
    await this.clickElement(this.buttonLogin);
  }

  async waitForDisappearLoginButton() {
    await this.waitForDisappearAnElement(this.buttonLogin);
  }

  async waitForDisplayedUserName() {
    await this.waitForDisplayedAnElement(this.userName);
  }

  async waitForDisplayedErrorMessage() {
    await this.waitForDisplayedAnElement(this.errorMessage);
  }

  async loginIntoSystem(login, password) {
    await this.clickButtonLoginOrRegister();
    await this.inputLogin(login);
    await this.inputPassword(password);
    await this.clickButtonLogin();
    await this.waitForDisappearLoginButton();
  }
}

module.exports = new LoginPageInteraction();
