const { Given, When, Then } = require('@wdio/cucumber-framework');

const loginPageInteraction = require('../pageobjects/LoginPageInteraction.js');

Given(/^I am go to '([^']*)' page$/, async (url) => {
  await loginPageInteraction.openURL(url);
});

When(/^I login with '([^']*)' and '([^']*)'$/, async (username, password) => {
  await loginPageInteraction.loginIntoSystem(username, password);
});

Then(/^I should get an error message saying '([^']*)'$/, async (message) => {
  const msg = loginPageInteraction.getElement(
    loginPageInteraction.errorMessage
  );
  await expect(msg).toHaveTextContaining(message);
});
