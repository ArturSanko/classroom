const { Given, When, Then } = require('@wdio/cucumber-framework');

const loginPageInteraction = require('../pageobjects/LoginPageInteraction.js');
const pageYaInteraction = require('../pageobjects/PageYaInteraction.js');
const registerPageInteraction = require('../pageobjects/RegisterPageInteraction.js');

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

Then(/^I should get my name on the page as: '([^']*)'$/, async (message) => {
  const msg = loginPageInteraction.getElement(loginPageInteraction.userName);
  await expect(msg).toHaveTextContaining(message);
});

When(/^I register an account with credentials:$/, async (datatable) => {
  const rows = datatable.hashes();
  for (const row of rows) {
    await registerPageInteraction.registerNewAccount(
      row.First_Name,
      row.Last_Name,
      row.E_Mail,
      row.Address_1,
      row.City,
      row.ZIP_Code,
      row.Country,
      row.Region_State,
      row.Login_name,
      row.Password,
      row.Password_Confirm
    );
  }
});

Then(/^I should get message as: '([^']*)'$/, async (message) => {
  const msg = registerPageInteraction.getElement(
    registerPageInteraction.successedPage
  );
  await expect(msg).toHaveTextContaining(message);
});
