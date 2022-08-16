const { Given, When, Then } = require('@wdio/cucumber-framework');

const loginPageInteraction = require('../pageobjects/LoginPageInteraction.js');
const pageYaInteraction = require('../pageobjects/PageYaInteraction.js');
const registerPageInteraction = require('../pageobjects/RegisterPageInteraction.js');
const shopInteraction = require('../pageobjects/ShopInteraction.js');

/**
 *  Verify attributes of element via JSON form.
 *
 * EXAMPLES:
 * I check shopping card item images:
            """
            {
                "dataCards": [
                    {
                        "src": "//automationteststore.com/image/thumbnails/18/76/papertowns2_jpg-100201-250x250.jpg",
                        "width": "250",
                        "height": "250"
                    }
            """
 *
 * @param formJSON
*/
Then(/^I check shopping card item images:$/, async (formJSON) => {
  await shopInteraction.checkShoppingCardItemImages(formJSON);
});

/**
 * Verify attributes of element via data table.
 *
 * EXAMPLES:
 * I expect elements attributes:
            | element     | attribute | value               |
            | .home-link2 | href.     | https://ya.ru/?nr=1 |
 *
 * @param datatable
*/
Then(/^I expect elements attributes:$/, async (datatable) => {
  const rows = datatable.hashes();
  for (const row of rows) {
    const elem = await pageYaInteraction.getElement(row.element);
    await expect(elem).toHaveAttribute(row.attribute, row.value);
  }
});

/**
 *  Verify text of element.
 *
 * EXAMPLES:
 * I expect that message of '{registerPageInteraction}'.'{successedPage}' is equal: 'YOUR ACCOUNT HAS BEEN CREATED!'
 * I expect that error message of '{loginPageInteraction}'.'{errorMessage}' is equal: 'Error: Incorrect login or password provided'
 * I expect that element of '{loginPageInteraction}'.'{userName}' is equal: 'Welcome back Name'
 *
 * @param pageName
 * @param selector
 * @param message
 */
Then(
  /^I expect that (message|error message|element) of '{pageName}'.'{selector}' is equal: '([^']*)'$/,
  async (pageName, selector, message) => {
    const msg = await pageName.getElement(pageName.selector);
    await expect(msg).toHaveTextContaining(message);
  }
);
