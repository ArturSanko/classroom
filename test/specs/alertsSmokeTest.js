const extraInteraction = require('../pageobjects/ExtraInteraction');
const { links } = require('../../Data/Links');

describe('Handle alerts on page', async function () {
  before(async function () {
    await extraInteraction.openURL(links.alertPage);
  });

  context('Alert:', function () {
    it('alert should contain certain text', function () {
      extraInteraction.clickButtonAlert();
      const alertsText = browser.getAlertText();
      expect(alertsText).toHaveText(links.textFromAlert);
    });

    it('alert should be accept', function () {
      browser.acceptAlert();
      expect(extraInteraction.getTextFromAlertResult()).toHaveText(
        links.alertResult
      );
    });
  });

  context('Confirm:', function () {
    it('confirm should contain certain text', function () {
      extraInteraction.clickButtonConfirm();
      const confirmsText = browser.getAlertText();
      expect(confirmsText).toHaveText(links.textFromConfirm);
    });

    it('confirm should be accept', function () {
      browser.acceptAlert();
      expect(extraInteraction.getTextFromConfirmResult()).toHaveText(
        links.confirmResult
      );
    });
  });

  context('Prompt:', function () {
    it('prompt should contain certain text', function () {
      extraInteraction.clickButtonPrompt();
      const promptsText = browser.getAlertText();
      expect(promptsText).toHaveText(links.textFromPrompt);
    });

    it('prompt should be accept with text', function () {
      extraInteraction.inputTextIntoPrompt(links.textForPrompt);
      browser.acceptAlert();
      expect(extraInteraction.getTextFromPromptResult()).toHaveText(
        links.promptResult
      );
    });
  });
});
