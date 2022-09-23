using System;

namespace Unit3
{
    class EditValue
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
        string[] friends = { "friend1", "friend2", "friend3", "friend4" };

        public void editValueMethod()
        {
            foreach (string friend in friends)
            {
                string newFriend = friend + " hello";
                Console.WriteLine($"new friend is: {newFriend}");
            }
        }
    }
}
