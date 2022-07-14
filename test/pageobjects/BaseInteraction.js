class BaseInteraction{
    async openBrowserWithURL(url){
        await browser.maximizeWindow();
        await browser.url(url);
    }

    async clickElement(selector){
        await $(selector).click();
    }

    async inputTextIntoElement(selector, text){
        await $(selector).addValue(text);
    }

    async waitForDisappearAnElement(selector){
        await $(selector).waitForDisplayed({timeout: 6000, reverse: true})
    }

    async waitForDisplayedAnElement(selector){
        await $(selector).waitForDisplayed({timeout: 6000}) 
    }

    async pressButton(button){
        await browser.keys(button)
    }
}


module.exports = BaseInteraction;