using System;
//dotnet run      for start script
namespace Unit1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("UNIT 1 task 1");
            /*
            Выполнить сложение различных типов(string+boolean, string+number, number+boolean)

            let string = 'привет';
            let bool = true;
            let sum1 = string + bool;

            console.log(sum1);

            let num = 5;
            let sum2 = string + num;

            console.log(sum2);

            let sum3 = num + bool;

            console.log(sum3);
            */

            string str = "5";
            bool boolean = true;
            string sum1 = str + boolean;

            Console.WriteLine("sum of string and boolean: " + sum1);

            int num = 0;
            string sum2 = str + num;

            Console.WriteLine("sum of number and string: " + sum2);

            // string result3 = num + boolean; ---> Operator '+' cannot be applied to operands of type 'int' and 'bool'

            // Console.WriteLine(result3);

            Console.WriteLine("UNIT 1 task 2");

            /*
            Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
             
            let string = 'привет';
            let bool = true;
            let mult1 = string * bool;

            console.log(mult1);

            let num = 5;
            let mult2 = string * num;
            console.log(mult2);

            let mult3 = num * bool;

            console.log(mult3);
            */
            // string mult1 = str * boolean; ---> Operator '*' cannot be applied to operands of type 'string' and  'bool'
            // Console.WriteLine("multiply of string and boolean: " + mult1);
            // string mult2 = str * num; ---> Operator '*' cannot be applied to operands of type 'string' and  'int'
            // Console.WriteLine("multiply of string and number: " + mult2);
            // string mult3 = num * boolean; ---> Operator '*' cannot be applied to operands of type 'int' and 'bool'
            // Console.WriteLine("multiply of number and boolean: " + mult3);

            Console.WriteLine("UNIT 1 task 3");

            /*
            Выполнить деление различных типов(string/boolean, string/number, number/Boolean)

            let string = 'привет';
            let bool = true;
            let div1 = string / bool;

            console.log(div1);

            let num = 5;
            let div2 = string / num;

            console.log(div2);

            let div3 = num / bool;

            console.log(div3);
            */
            // string div1 = str / boolean; ---> Operator '/' cannot be applied to operands of type 'string' and  'bool'
            // Console.WriteLine("multiply of string and boolean: " + div1);
            // string div2 = str / num; ---> Operator '/' cannot be applied to operands of type 'string' and  'int'
            // Console.WriteLine("multiply of string and number: " + div2);
            // string div3 = num / boolean; ---> Operator '/' cannot be applied to operands of type 'int' and 'bool'
            // Console.WriteLine("multiply of number and boolean: " + mult3);

            Console.WriteLine("UNIT 1 task 4");

            /*
            Выполнить явное преобразование(number, string, boolean)

            let n = 0;
            let str = '5';
            let bool = true;

            console.log(Number(n));
            console.log(Number(str));
            console.log(Number(bool));

            console.log(String(n));
            console.log(String(str));
            console.log(String(bool));

            console.log(Boolean(n));
            console.log(Boolean(str));
            console.log(Boolean(true));
             */

            Console.WriteLine("convert to int: " + Convert.ToInt32(num));
            Console.WriteLine("convert to int: " + Convert.ToInt32(str));
            Console.WriteLine("convert to int: " + Convert.ToInt32(boolean));

            Console.WriteLine("convert to string: " + Convert.ToString(num));
            Console.WriteLine("convert to string: " + Convert.ToString(str));
            Console.WriteLine("convert to string: " + Convert.ToString(boolean));

            Console.WriteLine("convert to boolean: " + Convert.ToBoolean(num));
            // Console.WriteLine("convert to boolean: " + Convert.ToBoolean(str)); ---> String '5' was not recognized as a valid Boolean
            Console.WriteLine("convert to boolean: " + Convert.ToBoolean(boolean));
        }
    }
}