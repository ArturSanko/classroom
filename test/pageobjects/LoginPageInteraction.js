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

  async openURL(url) {
    await this.openBrowserWithURL(url);
  }

  async clickButtonLoginOrRegister() {
    await this.clickElement(this.buttonLoginOrRegister);
  }

  async inputLogin(data) {
    await this.inputText(this.loginNameField, data);
  }

  async inputPassword(data) {
    await this.inputText(this.passwordField, data);
  }

  async clickButtonLogin() {
    await this.clickElement(this.buttonLogin);
  }

  async waitForDisappearLoginButton() {
    await this.waitForDisappear(this.buttonLogin);
  }

  async waitForDisplayedUserName() {
    await this.waitForDisplayed(this.userName);
  }

  async waitForDisplayedErrorMessage() {
    await this.waitForDisplayed(this.errorMessage);
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
