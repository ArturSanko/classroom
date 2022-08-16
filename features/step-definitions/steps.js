const { Given, When, Then } = require('@wdio/cucumber-framework');

const loginPageInteraction = require('../pageobjects/LoginPageInteraction.js');
const pageYaInteraction = require('../pageobjects/PageYaInteraction.js');
const registerPageInteraction = require('../pageobjects/RegisterPageInteraction.js');
const shopInteraction = require('../pageobjects/ShopInteraction.js');
const urls = require('../data/urls.js');

/**
 * Open URL.
 *
 * EXAMPLES:
 * I navigate to 'https://ya.ru'
 * I navigate to 'urls'.'shop'
 * I navigate to 'urls'.'yandex'
 *
 * @param url
 */
Given(/^I navigate to '([^']*)'$/, async (url) => {
  await browser.maximizeWindow();
  switch (url) {
    case 'shop':
      await browser.url(urls.shop);
      break;
    case 'yandex':
      await browser.url(urls.yandex);
      break;
  }
});
