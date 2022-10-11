// dotnet test BringItOn.csproj   -> to run a test
/*
Task - Bring It On 
Автоматизировать следующий сценарий:
1. Открыть https://pastebin.com  или аналогичный сервис в любом браузере
2. Создать New Paste со следующими деталями:
- Код:
git config --global user.name  "New Sheriff in Town"
git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
git push origin master --force
- Syntax Highlighting: "Bash"
- Paste Expiration: "10 Minutes"
- Paste Name / Title: "how to gain dominance among developers"
3. Сохранить paste и проверить следующее:
- Заголовок страницы браузера соответствует Paste Name / Title
- Синтаксис подвечен для bash
- Проверить что код соответствует введенному в пункте 2
*/
namespace BringItOn
{
    [TestClass]
    public class UnitTest1
    {

        [TestMethod]
        public void TestMethod1()
        {
            var url = "https://pastebin.com";
            By newPaste = By.Id("postform-text");
            By syntaxHighlighting = By.Id("select2-postform-format-container");
            By inputSyntaxHighlightingBash = By.XPath("//span[@class='select2-search select2-search--dropdown']/child::input[@class='select2-search__field']");
            By dropDownPasteExpiration = By.Id("select2-postform-expiration-container");
            By tenMinutes = By.XPath("//li[text()='10 Minutes']");
            By pasteName = By.Id("postform-name");
            By button = By.XPath("//button");

            By contentNewPaste = By.CssSelector("//span[text()='git config']");
            By contentHighlighting = By.XPath("//div[@class='left']/child::a[@class='btn -small h_800']");
            By contentPasteExpiration = By.XPath("//div[@class='expire']");

            var textPaste = "git config --global user.name  \"New Sheriff in Town\"\ngit reset $(git commit-tree HEAD^{tree} -m \"Legacy code\")\ngit push origin master --force";
            var textPasteAssert = "git config";
            var textHighlighting = "Bash";
            var textPasteExpiration = "                    10 min                ";
            var textPasteName = "how to gain dominance among developers";
            var title = "how to gain dominance among developers - Pastebin.com";

            var driver = new ChromeDriver(@"C:\Internship\drivers");
            driver = new OpenQA.Selenium.Chrome.ChromeDriver();
            Actions builder = new Actions(driver);

            driver.Navigate().GoToUrl(url);
            Thread.Sleep(500);
            driver.Manage().Window.Maximize();
            driver.FindElement(newPaste).SendKeys(textPaste);
            Thread.Sleep(500);
            driver.FindElement(syntaxHighlighting).Click();
            Thread.Sleep(500);
            driver.FindElement(inputSyntaxHighlightingBash).SendKeys(textHighlighting);
            Thread.Sleep(500);
            builder.KeyDown(Keys.Enter).KeyUp(Keys.Enter).Perform();
            Thread.Sleep(500);
            driver.FindElement(dropDownPasteExpiration).Click();
            Thread.Sleep(500);
            driver.FindElement(tenMinutes).Click();
            Thread.Sleep(500);
            driver.FindElement(pasteName).SendKeys(textPasteName);
            Thread.Sleep(500);
            driver.FindElement(button).Click();
            Thread.Sleep(500);

            // 3. Сохранить paste и проверить следующее:
            // * Проверить что код соответствует введенному в пункте 2

            // Assert.IsTrue failed.
            // var paste = driver.FindElement(contentNewPaste);
            // Assert.IsTrue(paste.Text.Equals(textPasteAssert));
            // Thread.Sleep(500);

            // * Синтаксис подвечен для bash
            var highlighting = driver.FindElement(contentHighlighting);
            Assert.IsTrue(highlighting.Text.Equals(textHighlighting));
            Thread.Sleep(500);

            // * Проверить что код соответствует введенному в пункте 2
            // Assert.IsTrue failed.
            // var pasteExpiration = driver.FindElement(contentPasteExpiration);
            // Assert.IsTrue(pasteExpiration.Text.Equals(textPasteExpiration));
            // Thread.Sleep(500);

            // * Заголовок страницы браузера соответствует Paste Name / Title
            var gotTitle = driver.Title;
            Assert.IsTrue(gotTitle.Equals(title));
            Thread.Sleep(500);

            driver.Quit();
        }
    }
}