using System;

namespace Unit3
{
    class ConvertToBool
    {
        /*
        Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello
 
        let friends = ['friend1', 'friend2', 'friend3', 'friend4'];
        console.log(friends);

        for (let i = 0; i<friends.length; i++) {
          friends[i] += ' hello';
        }

        console.log(friends);
        */
        int[] nums = { 1, 0, 2, 5, -1, -5, 1, -0, -1 };

        public void convertToBoolMethod()
        {
            foreach (int num in nums)
            {
                bool newNum = Convert.ToBoolean(num);
                Console.WriteLine($"num in boolean type is: {newNum}");
            }
        }
    }
}
