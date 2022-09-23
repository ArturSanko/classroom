using System;

namespace Unit3
{
    class DetermineIndexInArr
    {
        /*
        Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу
 
        let arr = [1, 22, 53, 41, 35, 6, 75, 8];
        let a = 22;
        let b = 35;
        let c = 75;
        let d = 1;

        function checkIndexOfArray(item1, item2)
        {
            console.log(item1.indexOf(item2));
        }

        checkIndexOfArray(arr, a);
        checkIndexOfArray(arr, b);
        checkIndexOfArray(arr, c);
        checkIndexOfArray(arr, d);
        */

        public int[] num = { 1, 22, 53, 41, 35, 6, 75, 8 };
        int index;

        public void indexOfElem(int[] arr, int elem)
        {
            index = Array.IndexOf(arr, elem);
            Console.WriteLine($"index of {elem} is {index}");
        }
    }
}
