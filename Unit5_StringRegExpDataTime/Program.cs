using System;
using System.Text.RegularExpressions;


namespace Unit5
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("UNIT 5 task 1");
            RegExpMethods regExpMethods = new RegExpMethods();
            regExpMethods.regexForStr(regExpMethods.lineWords, regExpMethods.patternStr);

            Console.WriteLine("\nUNIT 5 task 2");
            regExpMethods.regexForStr(regExpMethods.lineNums, regExpMethods.patternNum);

            Console.WriteLine("\nUNIT 5 task 3");
            /*
            Получить день, месяц и год текущей даты и по отдельности вывести в консоль
            

            let today = new Date().toLocaleDateString();

            console.log(today);
            console.log(new Date().getDay());
            console.log(new Date().getDate());
            console.log(new Date().getMonth() + 1);
            console.log(new Date().getFullYear());
            */
            DateTime dateTime = DateTime.Now;
            Console.WriteLine("time now in 12h format: " + DateTime.Now.ToString("h:mm:ss tt"));
            Console.WriteLine("time now in 24h format: " + dateTime.TimeOfDay);
            Console.WriteLine("day now: " + dateTime.Day);
            Console.WriteLine("month now: " + dateTime.Month);
            Console.WriteLine("year now: " + dateTime.Year);
        }
    }
}