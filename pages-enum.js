// page objects
const LoginPageInteraction = require('./features/pageobjects/LoginPageInteraction.js');
const PageYaInteraction = require('./features/pageobjects/PageYaInteraction.js');
const RegisterPageInteraction = require('./features/pageobjects/RegisterPageInteraction.js');
const ShopInteraction = require('./features/pageobjects/ShopInteraction.js');

// datas
const Urls = require('./features/data/urls.js');
const loginCredentials = require('./features/data/loginCredentials.js');

module.exports = {
  loginPageInteraction: new LoginPageInteraction(),
  pageYaInteraction: new PageYaInteraction(),
  registerPageInteraction: new RegisterPageInteraction(),
  shopInteraction: new ShopInteraction(),
  urls: new Urls(),
  loginCredentials: new loginCredentials(),
};
