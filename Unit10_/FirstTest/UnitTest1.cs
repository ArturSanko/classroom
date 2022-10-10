// dotnet test ICanWin.csproj   -> to run a test
/*
Task - I Can Win  
Автоматизировать следующий сценарий:
- Открыть https://pastebin.com или аналогичный сервис в любом браузере
- Создать New Paste со следующими деталями:
- Код: "Hello from WebDriver"
- Paste Expiration: "10 Minutes"
- Paste Name / Title: "helloweb"
*/
namespace FirstTest
{
    [TestClass]
    public class UnitTest1
    {

        [TestMethod]
        public void TestMethod1()
        {
            var url = "https://pastebin.com";
            By newPaste = By.Id("postform-text");
            By dropDownPasteExpiration = By.Id("select2-postform-expiration-container");
            By tenMinutes = By.XPath("//li[text()='10 Minutes']");
            By pasteName = By.Id("postform-name");

            var textPate = "Hello from WebDriver";
            var textPasteName = "helloweb";

            var driver = new ChromeDriver(@"C:\Internship\drivers");
            driver = new OpenQA.Selenium.Chrome.ChromeDriver();

            driver.Navigate().GoToUrl(url);
            Thread.Sleep(2000);
            driver.Manage().Window.Maximize();
            driver.FindElement(newPaste).SendKeys(textPate);
            Thread.Sleep(2000);
            driver.FindElement(dropDownPasteExpiration).Click();
            Thread.Sleep(2000);
            driver.FindElement(tenMinutes).Click();
            Thread.Sleep(2000);
            driver.FindElement(pasteName).SendKeys(textPasteName);
            Thread.Sleep(2000);
            driver.Quit();
        }
    }
}