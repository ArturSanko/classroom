const { Given, When, Then } = require('@wdio/cucumber-framework');

const loginPageInteraction = require('../pageobjects/LoginPageInteraction.js');
const pageYaInteraction = require('../pageobjects/PageYaInteraction.js');
const registerPageInteraction = require('../pageobjects/RegisterPageInteraction.js');
const shopInteraction = require('../pageobjects/ShopInteraction.js');
const urls = require('../data/urls.js');
const urlClass = require('../data/urlClass.js');
const loginCredentialsClass = require('../data/LoginCredentialsClass.js');
const loginCredentials = require('../data/loginCredentials.js');

/**
 * Open URL.
 *
 * EXAMPLES:
 * I navigate to 'urls'.'shop'
 * I navigate to 'urls'.'yandex'
 *
 * @param objUrls
 * @param url
 */
Given(/^I navigate to '([^']*)'.'([^']*)'$/, async (objUrls, url) => {
  await browser.maximizeWindow();
  switch (url) {
    case 'shop':
      await browser.url(urlClass.shop);
      break;
    case 'yandex':
      await browser.url(urlClass.yandex);
      break;
  }
});

/**
 * Log in user.
 *
 * EXAMPLES:
 * I login with '<username>' and '<password>'
 *  Examples:
      | username  | password | 
      | Login1234 | Passwor  |
 *
 * @param username
 * @param password
 */
When(/^I login with '([^']*)' and '([^']*)'$/, async (username, password) => {
  await loginPageInteraction.loginIntoSystem(username, password);
});

/**
 * Log in user through switch method.
 *
 * EXAMPLES:
 * I login as 'positiveUser'
 * I login as 'negativeUser'
 *
 * @param user
 */
When(/^I login as '([^']*)'$/, async (user) => {
  await loginPageInteraction.loginIntoSystemThroughSwitch(user);
});

/**
 * Register a new account.
 *
 * EXAMPLES:
 * I register an account with credentials:
            | First_Name | Last_Name | E_Mail           | Address_1 | City      | ZIP_Code | Country | Region_State | Login_name | Password | Password_Confirm |
            | Name3      | Surname3  | email@test3.test | Address 1 | Bialystok | 000 AAA  | Poland  | Podlaskie    | LoginName3 | Password | Password         |
 *
 * @param First_Name
 * @param Last_Name
 * @param E_Mail
 * @param Address_1
 * @param City
 * @param ZIP_Code
 * @param Country
 * @param Region_State
 * @param Login_name
 * @param Password
 * @param Password_Confirm
 */
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

/**
 * Click on page's element.
 *
 * EXAMPLES:
 * I click 'Books' element
 *
 * @param element
 */
When(/^I click '([^']*)' element$/, async (element) => {
  await shopInteraction.clickMenuItem(element);
});
