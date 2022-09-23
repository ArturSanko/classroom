
using System;
//dotnet run      for start script
namespace Unit2
{
    class Determine
    {
        /*
        В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в терминале
        (если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)

        let data = {
            name: {
                 a: 'Artur',
                 b: 'Alex',
                 c: 'Robert',
                 d: 'Natasha',
            },
             message: 'Hello ',
        }

        function determine(name) {
            for (let key in data.name) {
                if (name === data.name[key]) {
                    console.log(data.message + data.name[key]);
                    break;
                } else {
                    console.log(`There\'s no this name`);
                }
            }
        }

        determine('Robert');
        */
        public string greeting = "Hello ";

        string[] names = { "Artur", "Alex", "Robert", "Natasha", };

        public void determineName(string name)
        {
            foreach (string nameArr in names)
            {
                if (name == nameArr)
                {
                    Console.WriteLine(greeting + nameArr);
                    break;
                }
                else
                {
                    Console.WriteLine("There's no this name");
                    break;
                }
            }
        }
    }
}
