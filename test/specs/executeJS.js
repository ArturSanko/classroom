const extraInteraction = require('../pageobjects/ExtraInteraction');
const { links } = require('../../Data/Links');
const { textForScripts } = require('../../Data/TextForScripts');

describe('Execute JS', async function () {
  beforeEach(async function () {
    await extraInteraction.openURL(links.shop);
    await extraInteraction.waitForDisplayed(extraInteraction.banner);
  });

  it('remove an element', async function () {
    await extraInteraction.execute(
      extraInteraction.removeElementScript,
      extraInteraction.banner
    );
    await extraInteraction.waitForDisplayed(extraInteraction.hiddenText);
  });

  it('click on element', async function () {
    await extraInteraction.execute(
      extraInteraction.clickElementScript,
      extraInteraction.buttonCart
    );
    await extraInteraction.waitForDisplayed(extraInteraction.cartPage);
  });

  it('input search item into search field', async function () {
    await extraInteraction.execute(
      extraInteraction.inputTextScript,
      extraInteraction.searchField,
      textForScripts.text
    );
    expect(extraInteraction.searchField).toHaveText(textForScripts.text);
  });
});
