const BaseInteraction = require('./BaseInteraction');

class LoginPageInteraction extends BaseInteraction {
    constructor(){
        super()
        this.url = 'https://automationteststore.com/';

        this.buttonLoginOrRegister = '//*[text()="Login or register"]';

        this.loginNameField = '#loginFrm_loginname';
        this.passwordField = '#loginFrm_password';

        this.buttonLogin = '//*[@title="Login"]';

        this.userName = '//*[text()="Welcome back Name"]'

        this.errorMessage = '//div[starts-with(@class, "alert")]';
        //*[text()="Error: Incorrect login or password provided."]
        //*[contains(text(), "Error: Incorrect login or password provided.")]  
        //*[normalize-space(text()) = "Error: Incorrect login or password provided."]
        //*[.="Error: Incorrect login or password provided."]
    }

    async openURL(){
        await this.openBrowserWithURL(this.url)
    }

    async clickButtonLoginOrRegister(){
        await this.waitForDisplayedAnElement(this.buttonLoginOrRegister);
        await this.clickElement(this.buttonLoginOrRegister);
    }

    async inputLogin(data){
        await this.waitForDisplayedAnElement(this.loginNameField);
        await this.inputTextIntoElement(this.loginNameField, data)
    }

    async inputPassword(data){
        await this.waitForDisplayedAnElement(this.passwordField);
        await this.inputTextIntoElement(this.passwordField, data)
    }

    async clickButtonLogin(){
        await this.waitForDisplayedAnElement(this.buttonLogin);
        await this.clickElement(this.buttonLogin)
    }

    async waitForDisappearLoginButton(){
        await this.waitForDisappearAnElement(this.buttonLogin)
    }

    async waitForDisplayedUserName(){
        await this.waitForDisplayedAnElement(this.userName)
    }

    async waitForDisplayedErrorMessage(){
        await this.waitForDisplayedAnElement(this.errorMessage)
    }
}

module.exports = new LoginPageInteraction();