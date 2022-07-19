const extraInteraction = require('../pageobjects/ExtraInteraction');
const { links } = require('../../Data/Links');

describe("Work with page's iframe", async function () {
  before(async function () {
    await extraInteraction.openURL(links.iframe);
    await extraInteraction.waitForDisplayedAnElementH3();
    await extraInteraction.switchFrame();
    await extraInteraction.inputTextIntoFieldIframe(links.textForIframe);
  });

  it('text should be edited', async function () {
    await expect(
      await extraInteraction.getTextFromFieldIframe()
    ).toHaveTextContaining(links.textForIframe);
  });
});
