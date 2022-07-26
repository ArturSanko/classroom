const extraInteraction = require('../pageobjects/ExtraInteraction');
const { links } = require('../../Data/Links');
const { scripts } = require('../../Data/Scripts');
const { textForScripts } = require('../../Data/TextForScripts');

describe('Execute JS', async function () {
  beforeEach(async function () {
    await extraInteraction.openURL(links.shop);
    await extraInteraction.waitForDisplayed(extraInteraction.banner);
  });

  it('remove an element', async function () {
    await extraInteraction.execute(
      scripts.removeElement,
      extraInteraction.banner
    );
    await extraInteraction.waitForDisplayed(extraInteraction.hiddenText);
  });

  it('click on element', async function () {
    await extraInteraction.execute(
      scripts.clickElement,
      extraInteraction.buttonCart
    );
    await extraInteraction.waitForDisplayed(extraInteraction.cartPage);
  });

  it('input search item into search field', async function () {
    await extraInteraction.execute(
      scripts.inputText,
      extraInteraction.searchField,
      textForScripts.text
    );
    expect(extraInteraction.searchField).toHaveText(textForScripts.text);
  });
});
