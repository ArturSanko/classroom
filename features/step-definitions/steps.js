const { Given, When, Then } = require('@wdio/cucumber-framework');

const loginPageInteraction = require('../pageobjects/LoginPageInteraction.js');
const pageYaInteraction = require('../pageobjects/PageYaInteraction.js');
const registerPageInteraction = require('../pageobjects/RegisterPageInteraction.js');
const shopInteraction = require('../pageobjects/ShopInteraction.js');
const urls = require('../data/urls.js');
const urlClass = require('../data/urlClass.js');

/**
 * Open URL.
 *
 * EXAMPLES:
 * I navigate to 'https://ya.ru'
 * I navigate to 'urls'.'shop'
 * I navigate to 'urls'.'yandex'
 *
 * @param objUrls
 * @param url
 */
Given(/^I navigate to '([^']*)'.'([^']*)'$/, async (objUrls, url) => {
  // this.url = url;
  await browser.maximizeWindow();
  // await browser.url(objUrls.url);

  switch (url) {
    case 'shop':
      await browser.url(urlClass.shop);
      break;
    case 'yandex':
      await browser.url(urlClass.yandex);
      break;
  }
});
