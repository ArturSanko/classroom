const { loginCredentials } = require('../../Data/LoginCredentials');
const loginPageInteraction = require('../pageobjects/LoginPageInteraction');

describe('Smoke negative test for log in', function () {
  before(async function () {
    await loginPageInteraction.openURL();
    await loginPageInteraction.clickButtonLoginOrRegister();
  });

  it('account login page is opened', async function () {
    await loginPageInteraction.waitForDisplayedAccountLoginPage();
  });

  it('credentials are invalid', async function () {
    await loginPageInteraction.inputLogin(loginCredentials.login);
    await loginPageInteraction.inputPassword(loginCredentials.invalidPassword);
    // await expect(loginPageInteraction.getLoginText()).toHaveText(
    //   loginCredentials.login
    // );
    // await expect(loginPageInteraction.getPasswordText()).toHaveText(
    //   loginCredentials.invalidPassword
    // );
    await loginPageInteraction.clickButtonLogin();
  });

  it('user have to get error notification', async function () {
    await loginPageInteraction.waitForDisplayedErrorMessage();
  });
});
