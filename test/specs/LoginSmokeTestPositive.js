const loginCredentials = require("../models/LoginCredentials");
const loginPageInteraction = require("../pageobjects/LoginPageInteraction");

describe("Smoke positive test for log in", function () {
  before(async function () {
    await loginPageInteraction.openURL();
    await loginPageInteraction.clickButtonLoginOrRegister();
    await loginPageInteraction.inputLogin(loginCredentials.login);
    await loginPageInteraction.inputPassword(loginCredentials.validPassword);
    await loginPageInteraction.clickButtonLogin();
    await loginPageInteraction.waitForDisappearLoginButton();
  });

  it("user have to log in", async function () {
    await loginPageInteraction.waitForDisplayedUserName();
  });
});
