const loginCredentials = require("../models/LoginCredentials");
const searchItems = require("../models/SearchItems");
const loginPageInteraction = require("../pageobjects/LoginPageInteraction");
const buyingInteraction = require("../pageobjects/BuyingInteraction");

describe("Buying goods", function () {
  before(async function () {
    await loginPageInteraction.openURL();
    await loginPageInteraction.clickButtonLoginOrRegister();
    await loginPageInteraction.inputLogin(loginCredentials.login);
    await loginPageInteraction.inputPassword(loginCredentials.validPassword);
    await loginPageInteraction.clickButtonLogin();
    await loginPageInteraction.waitForDisappearLoginButton();
    await buyingInteraction.clickOnSearchField();
    await buyingInteraction.clickOnCategory();
    await buyingInteraction.inputSearchItem(searchItems.searchItem);
    await buyingInteraction.pressEnter();
    await buyingInteraction.clickOnGoods();
    await buyingInteraction.clickButtonAddToCart();
    await buyingInteraction.clickButtonCheckout();
    await buyingInteraction.clickButtonConfirmOrder();
  });

  it("user have to get message about successed order", async function () {
    await expect(
      await buyingInteraction.getTextFromSuccessOrderPage()
    ).toHaveTextContaining(searchItems.successedOrder);
  });
});
