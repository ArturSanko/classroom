const BaseInteraction = require('./BaseInteraction');

class RegisterPageInteraction extends BaseInteraction {
  constructor() {
    super();
    this.buttonLoginOrRegister = '//*[text()="Login or register"]';
    this.buttonContinue = '[title="Continue"]';
    this.createAccountPage = '.maintext';
    this.firstNameField = '#AccountFrm_firstname';
    this.lastNameField = '#AccountFrm_lastname';
    this.emailField = '#AccountFrm_email';
    this.address1Field = '#AccountFrm_address_1';
    this.cityField = '#AccountFrm_city';
    this.zipCodeField = '#AccountFrm_postcode';
    this.dropDownCountry = '#AccountFrm_country_id';
    this.dropDownRegionState = '#AccountFrm_zone_id';
    this.loginName = '#AccountFrm_loginname';
    this.password = '#AccountFrm_password';
    this.passwordConfirm = '#AccountFrm_confirm';
    this.policyRadioButton = '#AccountFrm_agree';
    this.successedPage = '.maintext';

  }

  async openURL(url) {
    await this.openBrowserWithURL(url);
  }

  async clickElement(selector) {
    await super.clickElement(selector);
  }

  async inputText(selector, data) {
    await super.inputText(selector, data);
  }

  async waitForDisplayed(selector) {
    await super.waitForDisplayed(selector);
  }

  async registerNewAccount(
    firstName,
    lastName,
    email,
    address1,
    city,
    zipCode,
    country,
    regionState,
    loginName,
    password,
    passwordConfirm
  ) {
    await this.clickElement(this.buttonLoginOrRegister);
    await this.clickElement(this.buttonContinue);
    await this.waitForDisplayed(this.createAccountPage);
    await this.inputText(this.firstNameField, firstName);
    await this.inputText(this.lastNameField, lastName);
    await this.inputText(this.emailField, email);
    await this.inputText(this.address1Field, address1);
    await this.inputText(this.cityField, city);
    await this.inputText(this.zipCodeField, zipCode);
    await this.clickElement(this.dropDownCountry);
    await this.clickElement(
      `//*[@id="AccountFrm_country_id"]//*[text()="${country}"]`
    );
    await this.clickElement(this.dropDownRegionState);

    await this.clickElement(
      `//*[@id="AccountFrm_zone_id"]//*[text()="${regionState}"]`
    );
    await this.inputText(this.loginName, loginName);
    await this.inputText(this.password, password);
    await this.inputText(this.passwordConfirm, passwordConfirm);
    await this.clickElement(this.policyRadioButton);
    await this.clickElement(this.buttonContinue);
  }

  async deleteCookies() {
    await super.deleteCookies();
  }

  async getElement(selector) {
    const elem = await super.getElement(selector);
    return elem;
  }
}

module.exports = new RegisterPageInteraction();
