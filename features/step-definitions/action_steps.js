const { Given, When, Then } = require('@wdio/cucumber-framework');

const loginPageInteraction = require('../pageobjects/LoginPageInteraction.js');
const pageYaInteraction = require('../pageobjects/PageYaInteraction.js');
const registerPageInteraction = require('../pageobjects/RegisterPageInteraction.js');
const shopInteraction = require('../pageobjects/ShopInteraction.js');

When(/^I login with '([^']*)' and '([^']*)'$/, async (username, password) => {
  await loginPageInteraction.loginIntoSystem(username, password);
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

When(/^I go to '([^']*)' menu item$/, async (item) => {
  await shopInteraction.clickMenuItem(item);
});
