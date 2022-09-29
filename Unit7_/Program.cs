using System;

namespace Unit7
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("\nUNIT 7 task 1");
            /*
            const users = [
            {
                firstName: 'John',
                lastName: 'Caper',
                phone: '7436676737634',
                registrationDate: '12.10.2021',
            },
            {
                firstName: 'Clark',
                lastName: 'Kent',
                phone: '4346676737634',
                registrationDate: '16.09.2021',
            },
            {
                firstName: 'Tony',
                lastName: 'Stark',
                phone: '7436698337634',
                registrationDate: '11.10.2021',
            },
            {
                firstName: 'Bruce',
                lastName: 'Wayne',
                phone: '1111176737634',
                registrationDate: '09.10.2021',
            },
            {
                firstName: 'Star',
                lastName: 'Lord',
                phone: '7439374737634',
                registrationDate: '10.10.2021',
            },
            {
                firstName: 'Kate',
                lastName: 'Bishop',
                phone: '7436693647634',
                registrationDate: '11.10.2021',
            },
            {
                firstName: 'Jerry',
                lastName: 'James',
                phone: '7409048737634',
                registrationDate: '10.10.2021',
            },
            {
                firstName: 'Jeremy',
                lastName: 'Clarkson',
                phone: '743667600289334',
                registrationDate: '16.10.2020',
            },
            {
                firstName: 'Robert',
                lastName: 'Patrik',
                phone: '7436676730093',
                registrationDate: '10.10.2020',
            },
            {
                firstName: 'Jonny',
                lastName: 'Sins',
                phone: '74923982737634',
                registrationDate: '01.01.2021',
            },
            {
                firstName: 'Andrew',
                lastName: 'Garfield',
                phone: '743667988344',
                registrationDate: '09.10.2019',
            },
            {
                firstName: 'Jane',
                lastName: 'Foster',
                phone: '74368783427634',
                registrationDate: '09.10.2019',
            },
            {
                firstName: 'Rick',
                lastName: 'Smith',
                phone: '700000037634',
                registrationDate: '12.10.2021',
            },
            ];

            1. Given an array with an online store user’s data. You need to iterate through the array
            and print in the console only users who registered on October 9 and 10, 2021.

            let user = users.filter(
            (item) =>
                item.registrationDate === '10.10.2021' ||
                item.registrationDate === '09.10.2021'
            );
            console.log(user);
            */

            Console.WriteLine("\nUNIT 7 task 2");
            /*
            2. Print numbers from 1 to 100 in the console. If the number is divisible by 3 without a remainder, 
            then print the “number is divisible by 3” to the console. If the number is divisible by 5 without a remainder, 
            then print to the console “the number is divisible by 5”. If the number is divisible by both 3 and 5 without a remainder, 
            then you will output to the console “the number is divisible by 3 by 5”.

            for (let i = 1; i < 101; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log(`the number ${i} is divisible by 3 by 5`);
            } else if (i % 3 === 0) {
                console.log(`the number ${i} is divisible by 3`);
            } else if (i % 5 === 0) {
                console.log(`the number ${i} is divisible by 5`);
            } else {
                console.log(i);
            }
            }
            */
            for (int i = 1; i < 101; i++)
            {
                if (i % 3 == 0 && i % 5 == 0)
                {
                    Console.WriteLine($"the number {i} is divisible by 3 by 5");
                }
                else if (i % 3 == 0)
                {
                    Console.WriteLine($"the number {i} is divisible by 3");
                }
                else if (i % 5 == 0)
                {
                    Console.WriteLine($"the number {i} is divisible by 5");
                }
                else
                {
                    Console.WriteLine(i);
                }
            }

            Console.WriteLine("\nUNIT 7 task 3");
            /*
            const prices = [
            64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421,
            9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123,
            ];

            3. There is an array of prices of goods in the receipt. In the console, you need to display 
            the sum of all prices and the average price of the product.
            Total: 8495 hryvnias, average price of goods 700 hryvnias - an example of a message in the console

            let total = prices.reduce((sum, current) => sum + current, 0);
            let avg = total / (prices.length - 1);
            console.log(
            `Total price of products: ${total} BYN, average price of products: ${avg} BYN`
            );
            */

            int[] prices = {
            64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421,
            9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123,
            };

            int total = prices.Sum();
            int avg = total / (prices.Length - 1);
            Console.WriteLine(
            $"Total price of products: {total} BYN, average price of products: {avg} BYN"
            );
        }
    }
}