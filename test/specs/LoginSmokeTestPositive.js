const { loginCredentials } = require('../../Data/LoginCredentials');
const loginPageInteraction = require('../pageobjects/LoginPageInteraction');

describe('Smoke positive test for log in', function () {
  before(async function () {
    await loginPageInteraction.openURL();
    await loginPageInteraction.clickButtonLoginOrRegister();
  });

  it('account login page is opened', async function () {
    await loginPageInteraction.waitForDisplayedAccountLoginPage();
  });

  it('credentials are valid', async function () {
    await loginPageInteraction.inputLogin(loginCredentials.login);
    await loginPageInteraction.inputPassword(loginCredentials.validPassword);
    // await expect(loginPageInteraction.getLoginText()).toHaveText(
    //   loginCredentials.login
    // );
    // await expect(loginPageInteraction.getPasswordText()).toHaveText(
    //   loginCredentials.validPassword
    // );
    await loginPageInteraction.clickButtonLogin();
    await loginPageInteraction.waitForDisappearLoginButton();
  });

  it('the user logged in. My account page is opened', async function () {
    await loginPageInteraction.waitForDisplayedUserName();
  });
});
