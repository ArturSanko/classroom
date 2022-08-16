const { Given, When, Then } = require('@wdio/cucumber-framework');

const loginPageInteraction = require('../pageobjects/LoginPageInteraction.js');
const pageYaInteraction = require('../pageobjects/PageYaInteraction.js');
const registerPageInteraction = require('../pageobjects/RegisterPageInteraction.js');
const shopInteraction = require('../pageobjects/ShopInteraction.js');

Then(/^I check shopping card item images:$/, async (formJSON) => {
  await shopInteraction.checkShoppingCardItemImages(formJSON);
});

Then(/^I expect elements attributes:$/, async (datatable) => {
  const rows = datatable.hashes();
  for (const row of rows) {
    const elem = await pageYaInteraction.getElement(row.element);
    await expect(elem).toHaveAttribute(row.attribute, row.value);
  }
});

// --------------------------------------
Then(/^I should get an error message saying '([^']*)'$/, async (message) => {
  const msg = await loginPageInteraction.getElement(
    loginPageInteraction.errorMessage
  );
  await expect(msg).toHaveTextContaining(message);
});

Then(/^I should get my name on the page as: '([^']*)'$/, async (message) => {
  const msg = await loginPageInteraction.getElement(
    loginPageInteraction.userName
  );
  await expect(msg).toHaveTextContaining(message);
});

Then(
  /^I expect that (message|error message|element) of '{pageName}'.'{selector}' is equal: '([^']*)'$/,
  async (pageName, selector, message) => {
    const msg = await pageName.getElement(pageName.selector);
    await expect(msg).toHaveTextContaining(message);
  }
);
