const extraInteraction = require('../pageobjects/ExtraInteraction');
const { links } = require('../../Data/Links');

describe('', async function () {
  before(async function () {
    await extraInteraction.openURL(links.workingWithElementState);
    await extraInteraction.clickButton(extraInteraction.buttonStart);
  });

  it('loading line is displayed', async function () {
    await extraInteraction.isDisplayed(extraInteraction.loadingLine);
  });

  it('loading line is disappeared and text "Hello World!" is displayed', async function () {
    await extraInteraction.waitForDisplayed(extraInteraction.finishLoading);
  });
});
