const { Given, When, Then } = require('@wdio/cucumber-framework');
const { World } = require('@wdio/cucumber-framework');

/**
 * Add two number.
 *
 * EXAMPLES:
 * When I add 2 and 2
 * When I add 4 and 4
 *
 * @param a
 * @param b
 */
When(/^I add ([^']*) and ([^']*)$/, async (a, b) => {
  this.result = a + b;
});
