using System;

namespace Unit3
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("UNIT 3 task 1");
            LoopThroughStrArr loopThroughStrArr = new LoopThroughStrArr();
            loopThroughStrArr.loopThroughStr();

            Console.WriteLine("\nUNIT 3 task 2");
            EditValue editValue = new EditValue();
            editValue.editValueMethod();

            Console.WriteLine("\nUNIT 3 task 3");
            ConvertToBool convertToBool = new ConvertToBool();
            convertToBool.convertToBoolMethod();

            Console.WriteLine("\nUNIT 3 task 4");
            SortArr sortArr = new SortArr();
            sortArr.reverseSortArrMethod();

            Console.WriteLine("\nUNIT 3 task 5");
            sortArr.sortArrByParam(5);

            Console.WriteLine("\nUNIT 3 task 6");
            DetermineIndexInArr determineIndexInArr = new DetermineIndexInArr();
            determineIndexInArr.indexOfElem(determineIndexInArr.num, 35);

            Console.WriteLine("\nUNIT 3 task 7");
            /*
            Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10

            let a = 15;
            while (a >= 10) {
                console.log(a);
                a--;
            }
            */
            int decrease = 20;

            while (decrease >= 10)
            {
                Console.WriteLine("decrease: " + decrease);
                decrease--;
            }

            Console.WriteLine("\nUNIT 3 task 8");
            /*
            Реализовать цикл, который выводит в консоль простые числа
 
            loop:
                for (let i = 2; i < 150; i++) {
                    for (let j = 2; j < i; j++) {
                        if (i % j === 0) continue loop;
                    }
                    console.log(i);
                }
            */

            bool isprime;

            for (int i = 2; i < 20; i++)
            {
                isprime = true;
                for (int j = 2; j < i; j++)
                {
                    if (i % j == 0)
                    {
                        isprime = false;
                    }
                }
                if (isprime)
                {
                    Console.WriteLine("isPrime: " + i);
                }
            }

            Console.WriteLine("\nUNIT 3 task 9");
            /*
            Реализовать цикл, который выводит в консоль нечетные числа

            let a = 1;
            for (; a < 150; a++) {
                if (a % 2 === 0) continue;
                console.log(a);
                }
            */
            int odd = 1;

            for (; odd < 20; odd++)
            {
                if (odd % 2 == 0) continue;
                Console.WriteLine("odd is: " + odd);
            }
        }
    }
}