const extraInteraction = require('../pageobjects/ExtraInteraction');
const { links } = require('../../Data/Links');
const { openBrowserWithURL } = require('../pageobjects/ExtraInteraction');

describe('Hover over element', async function () {
  before(async function () {
    await extraInteraction.openURL(links.hover);
  });

  it('elements are hovered', async function () {
    await extraInteraction.hoverOverElement();
  });
});
