const extraInteraction = require('../pageobjects/ExtraInteraction');
const { links } = require('../../Data/Links');
const { selectors } = require('../../Data/Selectors');

describe('Handle drag and drop', function () {
  before(function () {
    extraInteraction.openURL(links.dragAndDrpo);
  });

  context('Box A:', function () {
    it('box A should change its position', function () {
      extraInteraction.dragAndDropBox(selectors.boxA, selectors.boxB);
    });
  });

  context('Box B:', function () {
    it('box B should change its position', function () {
      extraInteraction.dragAndDropBox(selectors.boxB, selectors.boxA);
    });
  });
});
