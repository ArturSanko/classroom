const extraInteraction = require('../pageobjects/ExtraInteraction');
const { links } = require('../../Data/Links');
const { textToAsserts } = require('../../Data/TextToAsserts');

describe("Work with page's iframe", async function () {
  before(async function () {
    await extraInteraction.openURL(links.iframe);
    await extraInteraction.waitForDisplayed(extraInteraction.elementH3);
    await extraInteraction.switchFrame();
    await extraInteraction.inputText(
      extraInteraction.fieldForTextIframe,
      textToAsserts.textForIframe
    );
  });

  it('text should be edited', async function () {
    const fieldsText = await extraInteraction.getElement(
      extraInteraction.fieldForTextIframe
    );
    await expect(fieldsText).toHaveTextContaining(textToAsserts.textForIframe);
  });
});
