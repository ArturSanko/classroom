const scripts = {
  removeElement: 'document.querySelector(arguments[0]).remove()',
  clickElement: 'document.querySelector(arguments[0]).click()',
  inputText: 'document.querySelector(arguments[0]).value = arguments[1]',
};

module.exports = { scripts };
