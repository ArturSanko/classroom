const extraInteraction = require('../pageobjects/ExtraInteraction');
const { links } = require('../../Data/Links');
const { selectors } = require('../../Data/Selectors');
const { paths } = require('../../Data/Paths');

describe('Upload a file', async function () {
  before(async function () {
    await extraInteraction.openURL(links.upload);
    await extraInteraction.uploadFile(
      paths.fileForUpload,
      selectors.buttonChooseFile
    );
    await extraInteraction.clickButtonOnPage(selectors.buttonUpload);
  });

  it('check if file is uploaded', async function () {
    await extraInteraction.waitForElement(selectors.uploadedFile);
  });
});
