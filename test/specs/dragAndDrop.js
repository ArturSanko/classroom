const extraInteraction = require('../pageobjects/ExtraInteraction');
const { links } = require('../../Data/Links');

describe('Handle drag and drop', function () {
  before(function () {
    extraInteraction.openURL(links.dragAndDrpo);
  });

  context('Box A:', function () {
    it('box A should change its position', function () {
      extraInteraction.dragAndDropBox(
        extraInteraction.boxA,
        extraInteraction.boxB
      );
    });
  });

  context('Box B:', function () {
    it('box B should change its position', function () {
      extraInteraction.dragAndDropBox(
        extraInteraction.boxB,
        extraInteraction.boxA
      );
    });
  });
});
