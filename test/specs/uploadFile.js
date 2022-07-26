const extraInteraction = require('../pageobjects/ExtraInteraction');
const { links } = require('../../Data/Links');
const { paths } = require('../../Data/Paths');

describe('Upload a file', async function () {
  before(async function () {
    await extraInteraction.openURL(links.upload);
    await extraInteraction.uploadFile(
      paths.fileForUpload,
      extraInteraction.buttonChooseFile
    );
    await extraInteraction.clickButton(extraInteraction.buttonUpload);
  });

  it('check if file is uploaded', async function () {
    await extraInteraction.waitForDisplayed(extraInteraction.uploadedFile);
  });
});
