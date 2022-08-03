const { loginCredentials } = require('../../Data/LoginCredentials');
const loginPageInteraction = require('../pageobjects/LoginPageInteraction');
const { links } = require('../../Data/Links');

describe('Smoke positive and negatives test for log in', function () {
  beforeEach(async function () {
    await loginPageInteraction.openURL(links.shop);
  });

  loginCredentials.forEach(({ login, password, selector }) => {
    it(`the user logged in with login: ${login} and password: ${password} and shoud get the element: ${selector}`, async function () {
      await loginPageInteraction.loginIntoSystem(login, password, selector);
      await loginPageInteraction.deleteCookies();

    });
  });
});
