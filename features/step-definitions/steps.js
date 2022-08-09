const { Given, When, Then } = require('@wdio/cucumber-framework');

const loginPageInteraction = require('../pageobjects/LoginPageInteraction.js');
const pageYaInteraction = require('../pageobjects/PageYaInteraction.js');

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

Given(/^I open the URL '([^']*)'$/, async (url) => {
  await pageYaInteraction.openURL(url);
});

Then(/^I expect elements attributes:$/, async (datatable) => {
  const rows = datatable.hashes();
  for (const row of rows) {
    const elem = await pageYaInteraction.getElement(row.element);
    await expect(elem).toHaveAttribute(row.attribute, row.value);
  }
});
