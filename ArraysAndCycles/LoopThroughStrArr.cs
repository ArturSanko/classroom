using System;

namespace Unit3
{
    class LoopThroughStrArr
    {
        /*
        Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма

        let films = ['1+1', 'The Green Book', 'The Green Mile'];

        for (let i = 0; i<films.length; i++) {
            console.log('Name of film is: ' + films[i]);
        }
        */

        string[] films = { "1+1", "The Green Book", "The Green Mile" };

        public void loopThroughStr()
        {
            foreach (string film in films)
            {
                Console.WriteLine($"film is: {film}");
            }
        }
    }
}
