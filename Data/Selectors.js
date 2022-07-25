const selectors = {
  searchField: '#filter_keyword',
  categoryMen: '#category_58',
  goods: '[title="MAN Eau de Toilette Spray"]',
  buttonAddToCart: '.cart',
  buttonCheckout: '#cart_checkout1',
  buttonConfirmOrder: '#checkout_btn',
  successedOrderMessage: '.maintext',

  allGoods: '.fixed a',
  attr: 'title',

  dropDown: '#search-category',
  chosenCatagory: '#category_selected',
  valueSearchItem: 'input#keyword',
  textSearchCategory:
    '//select[@id="category_id"]/option[@selected="selected"][contains(text(), "Men")]',
  chosenGoods: '//span[contains(text(), "MAN Eau de Toilette Spray")]',
  shoppingCartPage: '//span[contains(text(), "Shopping Cart")]',
  checkoutConfirmationPage: '//span[contains(text(), "Checkout Confirmation")]',

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
