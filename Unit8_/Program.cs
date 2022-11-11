using System;

namespace Unit8
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("UNIT 8 task 1");
            PinCodeGen pinCodeGen = new PinCodeGen();
            pinCodeGen.pinCodeGenerator(6);
            pinCodeGen.pinCodeGenerator(4);

            Console.WriteLine("\nUNIT 8 task 2");
            ValidatePhoneNum validatePhoneNum = new ValidatePhoneNum();
            validatePhoneNum.validatePhoneNumber("067 734 4343");
            validatePhoneNum.validatePhoneNumber("094 643 7432");
            validatePhoneNum.validatePhoneNumber("083 jfvj 4554");
            validatePhoneNum.validatePhoneNumber("Anton0938 884");
            validatePhoneNum.validatePhoneNumber("0437348348");

            Console.WriteLine("\nUNIT 8 task 3"); // does not work
            RexepForArr rexepForArr = new RexepForArr();
            rexepForArr.deleteInvalidElements();
        }
    }
}