const extraInteraction = require('../pageobjects/ExtraInteraction');
const { links } = require('../../Data/Links');
const { selectors } = require('../../Data/Selectors');

describe('Open new tab', async function () {
  before(async function () {
    await extraInteraction.openURL(links.window);
    await extraInteraction.clickButton(selectors.buttonForNewWindow);
    await browser.switchWindow(links.newWindow)
  });

  it('item should open in new tab', async function () {
    await expect(browser).toHaveUrl(links.newWindow);
  });
});
