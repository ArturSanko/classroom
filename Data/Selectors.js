const selectors = {
  buttonForNewWindow: '//*[text()="Click Here"]',

  fieldForTextIframe: '#tinymce',
  elementH3: '.example',

  buttonAlert: '[onclick="jsAlert()"]',
  buttonConfirm: '[onclick="jsConfirm()"]',
  buttonPrompt: '[onclick="jsPrompt()"]',
  alertResult: '//*[text()="You successfully clicked an alert"]',
  confirmResult: '//*[text()="You clicked: Ok"]',
  promptResult: '//*[text()="You entered: text for prompt"]',

  boxA: '#column-a',
  boxB: '#column-b',

  elementForHover: '[alt^="User"]',

  fileForDownload: '.example > a:nth-child(4)',

  buttonChooseFile: '#file-upload',
  buttonUpload: '#file-submit',
  uploadedFile: '#uploaded-files',
};

module.exports = { selectors };
