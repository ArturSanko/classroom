using System;

namespace Unit3
{
    class SortArr
    {
        /*
       Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию

        let arr = [1, 6, 7, 8, 3, 4, 5, 6];
        arr.sort((a, b) => b - a)
        console.log(arr);
        */
        int[] nums = { 1, 6, 7, 8, -3, 4, -5, 23, 10 };

        public void reverseSortArrMethod()
        {
            Array.Sort(nums);
            Array.Reverse(nums);

            foreach (int num in nums)
            {
                Console.WriteLine($"sorted num by DESC: {num}");
            }
        }

        /*
        Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3
        
        let a = 3;
        arr = arr.filter(item => (item > a));
        console.log(arr);  
        */
        // int[] sortedArr;
        List<int> numList = new List<int>();
        int[] sortedArr;
        int param;
        public void sortArrByParam(int param)
        {
            foreach (int num in nums)
            {
                if (num > param)
                {
                    numList.Add(num);
                    Console.WriteLine($"sorted num by param: {num}");
                }
            }
            sortedArr = numList.ToArray();
        }
    }
}
