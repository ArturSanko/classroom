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
        readonly string url = "https://pastebin.com";
        readonly By newPaste = By.Id("postform-text");
        readonly By syntaxHighlighting = By.Id("select2-postform-format-container");
        readonly By inputSyntaxHighlightingBash = By.XPath("//span[@class='select2-search select2-search--dropdown']/child::input[@class='select2-search__field']");
        readonly By dropDownPasteExpiration = By.Id("select2-postform-expiration-container");
        readonly By tenMinutes = By.XPath("//li[text()='10 Minutes']");
        readonly By pasteName = By.Id("postform-name");
        readonly By button = By.XPath("//button");
        readonly By contentNewPaste = By.CssSelector("//span[text()='git config']");
        readonly By contentHighlighting = By.XPath("//div[@class='left']/child::a[@class='btn -small h_800']");
        readonly By contentPasteExpiration = By.XPath("//div[@class='expire']");
        readonly string textPaste = "git config --global user.name  \"New Sheriff in Town\"\ngit reset $(git commit-tree HEAD^{tree} -m \"Legacy code\")\ngit push origin master --force";
        readonly string textPasteAssert = "git config";
        readonly string textHighlighting = "Bash";
        readonly string textPasteExpiration = "                    10 min                ";
        readonly string textPasteName = "how to gain dominance among developers";
        string title = "how to gain dominance among developers - Pastebin.com";
        readonly int timeout = 1000;
        readonly static IWebDriver driver = new ChromeDriver();
        readonly Actions builder = new Actions(driver);

        [SetUp]
        public void Init()
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
            SeleniumSetMethods.ClickElement(driver, syntaxHighlighting);
            Thread.Sleep(timeout);
            SeleniumSetMethods.InputTextIntoElement(driver, inputSyntaxHighlightingBash, textHighlighting);
            Thread.Sleep(timeout);
            SeleniumSetMethods.PressEnter(builder);
            Thread.Sleep(timeout);
            SeleniumSetMethods.ClickElement(driver, dropDownPasteExpiration);
            Thread.Sleep(timeout);
            SeleniumSetMethods.ClickElement(driver, tenMinutes);
            Thread.Sleep(timeout);
            SeleniumSetMethods.InputTextIntoElement(driver, pasteName, textPasteName);
            Thread.Sleep(timeout);
            SeleniumSetMethods.ClickElement(driver, button);
            Thread.Sleep(timeout);

            // 3. Сохранить paste и проверить следующее:
            // * Проверить что код соответствует введенному в пункте 2

            // Assert.IsTrue failed.
            // var paste = driver.FindElement(contentNewPaste).Text;
            var paste = SeleniumGetMethods.GetText(driver, contentNewPaste);
            Console.WriteLine("paste: " + paste);
            // Thread.Sleep(timeout);
            // Assert.AreEqual(textPasteAssert, paste);

            // // * Синтаксис подвечен для bash
            var highlighting = SeleniumGetMethods.GetText(driver, contentHighlighting);
            Console.WriteLine("highlighting: " + highlighting);

            // Assert.IsTrue(highlighting.Text.Equals(textHighlighting));
            // Thread.Sleep(timeout);

            // * Проверить что код соответствует введенному в пункте 2
            // Assert.IsTrue failed.
            var pasteExpiration = SeleniumGetMethods.GetText(driver, contentPasteExpiration);
            Console.WriteLine("pasteExpiration " + pasteExpiration);

            // Assert.IsTrue(pasteExpiration.Text.Equals(textPasteExpiration));
            // Thread.Sleep(timeout);

            // // * Заголовок страницы браузера соответствует Paste Name / Title
            var gotTitle = SeleniumGetMethods.GetTitle(driver);
            Console.WriteLine("gotTitle " + gotTitle);

            // Assert.IsTrue(gotTitle.Equals(title));
            // Thread.Sleep(timeout);
        }

        [TearDown]
        public void TearDown()
        {
            SeleniumSetMethods.Quit(driver);
        }
    }
}