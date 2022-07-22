const { loginCredentials } = require('../../Data/LoginCredentials');
const extraInteraction = require('../pageobjects/ExtraInteraction');
const loginPageInteraction = require('../pageobjects/LoginPageInteraction');

describe('Cookies', function () {
  beforeEach(async function () {
    await loginPageInteraction.openURL();
  });

  it('cookies after successful login', async function () {
    await loginPageInteraction.loginIntoSystem(
      loginCredentials.login,
      loginCredentials.validPassword
    );
    await loginPageInteraction.waitForDisplayedUserName();
    const cookiesValid = await extraInteraction.getCookies();
    console.log('invalid: ' + cookiesValid);
  });

//   it('cookies after unsuccessful login', async function () {
//     await loginPageInteraction.loginIntoSystem(
//       loginCredentials.login,
//       loginCredentials.invalidPassword
//     );
//     await loginPageInteraction.waitForDisplayedUserName();
//     const cookiesInvalid = await extraInteraction.getCookies();
//     console.log('invalid: ' + cookiesInvalid);
//   });

  //   it('', async function () {});
});
