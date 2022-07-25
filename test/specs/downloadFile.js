const extraInteraction = require('../pageobjects/ExtraInteraction');
const { links } = require('../../Data/Links');

describe('Download a file', async function () {
  before(async function () {
    await extraInteraction.openURL(links.downloads);
  });

  it('check if file exists in folder', async function () {
    await extraInteraction.downloadPNGFile();
    await extraInteraction.waitUntilFileDownload();
  });
});
