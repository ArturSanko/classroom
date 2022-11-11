using System;

namespace Unit8
{
    class PinCodeGen
    {
        /*
        Implement a function called pinCodeGenerator. This function should take one argument called length and
        return a randomly generated pin code of a given length.

        For example,  pinCodeGenerator(5) → 73473

        function pinCodeGenerator(length) {
          let pin = '';

          function random(min, max) {
            return min + Math.random() * (max - min);
          }

          for (let i = 1; i <= length; i++) {
            const num = Math.ceil(random(1, 9));
            pin += num;
          }
          console.log(Number(pin));
        }

        pinCodeGenerator(6);
        */

        public void pinCodeGenerator(int length)
        {
            string pin = "";
            int random()
            {
                Random rnd = new Random();
                return rnd.Next(1, 9);
            }

            for (int i = 1; i <= length; i++)
            {
                int num = random();
                pin += num;
            }
            Console.WriteLine(Convert.ToInt32(pin));
        }
    }
}
