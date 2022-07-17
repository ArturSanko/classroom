const { loginCredentials } = require('../../Data/LoginCredentials');
const loginPageInteraction = require('../pageobjects/LoginPageInteraction');

describe('Smoke negative test for log in', function () {
  before(async function () {
    await loginPageInteraction.openURL();
    await loginPageInteraction.clickButtonLoginOrRegister();
    await loginPageInteraction.inputLogin(loginCredentials.login);
    await loginPageInteraction.inputPassword(loginCredentials.invalidPassword);
    await loginPageInteraction.clickButtonLogin();
  });

  it('user have to get error message', async function () {
    await loginPageInteraction.waitForDisplayedErrorMessage();
  });
});
