namespace BringItOn
{
    class SeleniumSetMethods
    {
        public static void OpenURL(IWebDriver driver, string url)
        {
            driver.Navigate().GoToUrl(url);
            driver.Manage().Window.Maximize();
        }

        public static void InputTextIntoElement(IWebDriver driver, By element, string text)
        {
            driver.FindElement(element).SendKeys(text);
        }

        public static void ClickElement(IWebDriver driver, By element)
        {
            driver.FindElement(element).Click();
        }

        public static void PressEnter(Actions builder)
        {
            builder.KeyDown(Keys.Enter).KeyUp(Keys.Enter).Perform();

        }

        public static void Quit(IWebDriver driver)
        {
            driver.Quit();
        }
    }
}