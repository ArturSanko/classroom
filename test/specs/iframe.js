const extraInteraction = require('../pageobjects/ExtraInteraction');
const { links } = require('../../Data/Links');
const { textToAsserts } = require('../../Data/TextToAsserts');
const { selectors } = require('../../Data/Selectors');

describe("Work with page's iframe", async function () {
  before(async function () {
    await extraInteraction.openURL(links.iframe);
    await extraInteraction.waitForDisplayed(selectors.elementH3);
    await extraInteraction.switchFrame();
    await extraInteraction.inputText(
      selectors.fieldForTextIframe,
      textToAsserts.textForIframe
    );
  });

  it('text should be edited', async function () {
    const fieldsText = await extraInteraction.getElement(
      selectors.fieldForTextIframe
    );
    await expect(fieldsText).toHaveTextContaining(textToAsserts.textForIframe);
  });
});
