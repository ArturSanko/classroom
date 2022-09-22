using System;

namespace Unit2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("UNIT 2 task 1");
            Car car = new Car();
            car.color = "black";
            Console.WriteLine("car's color is: " + car.color);
            car.color = "green";
            Console.WriteLine("car's color is: " + car.color);
            Console.WriteLine("car's power is: " + car.Power(55));

            Console.WriteLine("UNIT 2 task 2");
            Fruits fruits = new Fruits();
            Console.WriteLine("fruits' sum is: " + fruits.getSumOfFruits());

            Console.WriteLine("UNIT 2 task 3");
            Determine determine = new Determine();
            determine.determineName("Vasay");
            determine.determineName("Artur");

            Console.WriteLine("UNIT 2 task 4");
            TypeOfVar typeOfVar = new TypeOfVar();
            Console.WriteLine("typeOfVar: " + typeOfVar.arg2.GetType());
            Console.WriteLine("typeOfVar: " + typeOfVar.arg3_1.GetType());
            Console.WriteLine("typeOfVar: " + typeOfVar.arg3_2.GetType());
            Console.WriteLine("typeOfVar: " + typeOfVar.arg4.GetType());
            Console.WriteLine("typeOfVar: " + typeOfVar.arg5_1.GetType());
            Console.WriteLine("typeOfVar: " + typeOfVar.arg5_2.GetType());


            Console.WriteLine("UNIT 2 task 5");
            IsPrime isPrime = new IsPrime();
            Console.WriteLine("isPrimeMethod: " + isPrime.isPrimeMethod(isPrime.a));
            Console.WriteLine("isPrimeMethod: " + isPrime.isPrimeMethod(isPrime.b));
            Console.WriteLine("isPrimeMethod: " + isPrime.isPrimeMethod(isPrime.c));
        }
    }
}