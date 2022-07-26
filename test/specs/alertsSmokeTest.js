const extraInteraction = require('../pageobjects/ExtraInteraction');
const { links } = require('../../Data/Links');
const { textToAsserts } = require('../../Data/TextToAsserts');

describe('Handle alerts on page', async function () {
  before(async function () {
    await extraInteraction.openURL(links.alertPage);
  });

  context('Alert:', function () {
    it('alert should contain certain text', function () {
      extraInteraction.clickButton(extraInteraction.buttonAlert);
      const alertsText = browser.getAlertText();
      expect(alertsText).toHaveText(textToAsserts.textFromAlert);
    });

    it('alert should be accept', function () {
      browser.acceptAlert();
      expect(
        extraInteraction.getElement(extraInteraction.alertResult)
      ).toHaveText(textToAsserts.alertResult);
    });
  });

  context('Confirm:', function () {
    it('confirm should contain certain text', function () {
      extraInteraction.clickButton(extraInteraction.buttonConfirm);
      const confirmsText = browser.getAlertText();
      expect(confirmsText).toHaveText(textToAsserts.textFromConfirm);
    });

    it('confirm should be accept', function () {
      browser.acceptAlert();
      expect(
        extraInteraction.getElement(extraInteraction.confirmResult)
      ).toHaveText(textToAsserts.confirmResult);
    });
  });

  context('Prompt:', function () {
    it('prompt should contain certain text', function () {
      extraInteraction.clickButton(extraInteraction.buttonPrompt);
      const promptsText = browser.getAlertText();
      expect(promptsText).toHaveText(textToAsserts.textFromPrompt);
    });

    it('prompt should be accept with text', function () {
      extraInteraction.inputTextIntoPrompt(textToAsserts.textForPrompt);
      browser.acceptAlert();
      expect(
        extraInteraction.getElement(extraInteraction.promptResult)
      ).toHaveText(links.promptResult);
    });
  });
});
