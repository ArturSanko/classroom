const extraInteraction = require('../pageobjects/ExtraInteraction');
const { links } = require('../../Data/Links');
const { paths } = require('../../Data/Paths');

describe('Download a file', async function () {
  before(async function () {
    await extraInteraction.openURL(links.downloads);
    await extraInteraction.clickButton(extraInteraction.fileForDownload);
  });

  it('check if file exists in folder', async function () {
    await extraInteraction.waitUntilFileDownload(paths.downloadedFile);
  });
});
