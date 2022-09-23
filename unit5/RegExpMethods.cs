using System;
using System.Text.RegularExpressions;

namespace Unit5
{
    class RegExpMethods
    {
        /*
        Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение, которое найдет строки ahb, acb, aeb 
        по шаблону: буква 'a', любой символ, буква 'b'

        let str = 'ahb acb aeb aeeb adcb axeb';
        let regexp = / a +.b / ig;
        let result;

        while (result = regexp.exec(str)) {
            console.log(`Found: ${result[0]} in position ${result.index}`);
        }
        */
        public string lineWords = "ahb acb aeb aeeb adcb axeb";
        public string patternStr = @"a.b";

        public void regexForStr(string str, string regex)
        {
            Regex rg = new Regex(regex);
            MatchCollection matchedWords = rg.Matches(str);
            if (matchedWords.Count > 0)
            {
                foreach (Match match in matchedWords)
                    Console.WriteLine("matched item: " + match.Value);
            }
            else
            {
                Console.WriteLine("No matches found");
            }
        }
        /*
        Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные

        let str = '2+3 223 2223';
        let regexp = /2\+3/;
        let result = regexp.exec(str);
        console.log(`Found ${result[0]} in position ${result.index}`);
        */
        public string lineNums = "2+3 223 2223";
        public string patternNum = @"2\+3";
    }
}