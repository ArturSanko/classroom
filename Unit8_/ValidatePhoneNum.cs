using System;
using System.Text.RegularExpressions;

namespace Unit8
{
    class ValidatePhoneNum
    {
        /*
        Create a function that checks whether a phone number is valid or not.
        NOTE: You don’t need to test your function with all possible phone numbers, just check if the function will work correctly
        with the following inputs.

        validatePhoneNymber(067 734 4343) → true
        validatePhoneNymber(094 643 7432) → true
        validatePhoneNymber(083 jfvj 4554) → false
        validatePhoneNymber(Anton0938 884) → false
        validatePhoneNymber(0437348348) → true

        function validatePhoneNymber(phoneNumber)
        {
            let num = phoneNumber.split(' ').join('');

            const regexp = /\D / gi;
            const result = regexp.test(num);

            if (result === false)
            {
                console.log(true);
            }
            else
            {
                console.log(false);
            }
        }

        const res_a = validatePhoneNymber('067 734 4343');
        const res_b = validatePhoneNymber('094 643 7432');
        const res_c = validatePhoneNymber('083 jfvj 4554');
        const res_d = validatePhoneNymber('Anton0938 884');
        const res_e = validatePhoneNymber('0437348348');
        */

        public void validatePhoneNumber(string phoneNumber)
        {
            string[] numbers = phoneNumber.Split(new char[] { ' ' });
            string number = string.Join("", numbers);

            string patternStr = @"\D";
            bool result = Regex.IsMatch(number, patternStr);
            Console.WriteLine(!result);
        }
    }
}