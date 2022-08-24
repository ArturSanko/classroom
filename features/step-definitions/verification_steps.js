const { Given, When, Then } = require('@wdio/cucumber-framework');
const actSteps = require('./action_steps.js');

var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;

const { addAttachment } = require('@wdio/allure-reporter').default;

/**
 *  Verify sum.
 *
 * EXAMPLES:
 * Then the sum was 4
 * Then the sum was 6
 *
 * @param sum
 */
Then(/^the sum was ([^]*)$/, async (sum) => {
  expect(actSteps.result).toEqual(sum);
  addAttachment('Sum', [sum], 'application/json');
});
