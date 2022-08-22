const { Given, When, Then } = require('@wdio/cucumber-framework');
const actSteps = require('./action_steps.js');

var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;

/**
 *  Verify sum.
 *
 * EXAMPLES:
 * Then the sum was 4
 * Then the sum was 6
 *
 * @param sum
 */
Then(/^the sum was ([^']*)$/, async (sum) => {
  expect(this.result).toEqual(sum);
});
