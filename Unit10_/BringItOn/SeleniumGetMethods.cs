namespace BringItOn
{
    class SeleniumGetMethods
    {
        public static string GetText(IWebDriver driver, By element)
        {
            return driver.FindElement(element).Text;
        }

        public static string GetTitle(IWebDriver driver)
        {
            return driver.Title;
        }
    }
}