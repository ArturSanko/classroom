const extraInteraction = require('../pageobjects/ExtraInteraction');
const { links } = require('../../Data/Links');
const { openBrowserWithURL } = require('../pageobjects/ExtraInteraction');

describe('Handle drag and drop', function () {
  before(function () {
    extraInteraction.openURL(links.dragAndDrpo);
  });

  context('Box A:', function () {
    it('box A should change its position', function () {
      extraInteraction.dragAndDropBoxA();
    });
  });

  context('Box B:', function () {
    it('box B should change its position', function () {
      extraInteraction.dragAndDropBoxB();
    });
  });
});
