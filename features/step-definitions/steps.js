const { Given, When, Then } = require('@wdio/cucumber-framework');

const loginPageInteraction = require('../pageobjects/LoginPageInteraction.js');

Given(/^I am go to '([^']*)' page$/, async (url) => {
  await loginPageInteraction.openURL(url);
});

// When(/^I login with '(^$|^.*@.*\..*$)' and '(^$|^.*@.*\..*$)'$/, async (username, password) => {
//   await loginPageInteraction.loginIntoSystem(username, password);
// });

When(
  /^I login with '([^']*)' and '([^']*)'$/,
  async (username, password) => {
    await $('//*[text()="Login or register"]').click();
    await $('.maintext').waitForDisplayed({
      timeoutMsg: `The elememt: '.maintext' was not displayed`,
    });
    await $('#loginFrm_loginname').addValue(username);
    await $('#loginFrm_password').addValue(password);
    await $('[title="Login"]').click();
  }
);

Then(/^I should get an error message saying '([^']*)'$/, async (message) => {
  const msg = loginPageInteraction.getElement(
    loginPageInteraction.errorMessage
  );
  await expect(msg).toHaveTextContaining(message);
});
