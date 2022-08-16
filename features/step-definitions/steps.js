const { Given, When, Then } = require('@wdio/cucumber-framework');

const loginPageInteraction = require('../pageobjects/LoginPageInteraction.js');
const pageYaInteraction = require('../pageobjects/PageYaInteraction.js');
const registerPageInteraction = require('../pageobjects/RegisterPageInteraction.js');
const shopInteraction = require('../pageobjects/ShopInteraction.js');

/**
 * Open URL.
 *
 * EXAMPLES:
 * I navigate to 'https://ya.ru'
 *
 * @param url
 */
Given(/^I navigate to '([^']*)'$/, async (url) => {
  await browser.maximizeWindow();
  await browser.url(url);
});
