// dotnet test FirstTest.csproj   -> to run a test
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
        IWebDriver driver = new OpenQA.Selenium.Chrome.ChromeDriver();
        // var driver = new ChromeDriver(@"C:\Internship\drivers");
        string url = "https://pastebin.com";
        By newPaste = By.Id("postform-text");
        By dropDownPasteExpiration = By.Id("select2-postform-expiration-container");
        By tenMinutes = By.XPath("//li[text()='10 Minutes']");
        By pasteName = By.Id("postform-name");
        string textPaste = "Hello from WebDriver";
        string textPasteName = "helloweb";
        int timeout = 1000;

        [SetUp]
        public void Initialize()
        {
            // SeleniumSetMethods.OpenURL(driver, url);
        }

        [TestMethod]
        public void TestMethod1()
        {
            SeleniumSetMethods.OpenURL(driver, url);
            Thread.Sleep(timeout);
            SeleniumSetMethods.InputTextIntoElement(driver, newPaste, textPaste);
            Thread.Sleep(timeout);
            SeleniumSetMethods.ClickElement(driver, dropDownPasteExpiration);
            Thread.Sleep(timeout);
            SeleniumSetMethods.ClickElement(driver, tenMinutes);
            Thread.Sleep(timeout);
            SeleniumSetMethods.InputTextIntoElement(driver, pasteName, textPasteName);
            Thread.Sleep(timeout);
        }

        [TestCleanup]
        public void TearDown()
        {
            SeleniumSetMethods.Quit(driver);
        }
    }
}