const extraInteraction = require('../pageobjects/ExtraInteraction');
const { links } = require('../../Data/Links');

describe('Open new tab', async function () {
  before(async function () {
    await extraInteraction.openURL(links.window);
    await extraInteraction.clickButtonClickHere();
    await browser.switchWindow(links.newWindow)
  });

  it('item should open in new tab', async function () {
    await expect(browser).toHaveUrl(links.newWindow);
  });
});
