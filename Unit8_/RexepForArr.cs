using System;
using System.Text.RegularExpressions;

namespace Unit8
{
    class RexepForArr
    {
        /*
        There is an array with the most popular last names, but few elements don’t look like valid last names.
        Delete invalid elements of the array.
        const arr =  ["НПП Прізвище Кіл-ть Приблизно","______________________в_ базіпо_Україні", "0-rt-rgfr", "8484fjdfkf",
        "МЕЛЬНИК","ШЕВЧЕНКО","БОЙКО","КОВАЛЕНКО","БОНДАРЕНКО","ТКАЧЕНКО","КОВАЛЬЧУК","КРАВЧЕНКО","ОЛІЙНИК"]

        const arr = [
        'НПП Прізвище Кіл-ть Приблизно',
        '______________________в_ базіпо_Україні',
        '0-rt-rgfr',
        '8484fjdfkf',
        'МЕЛЬНИК',
        'ШЕВЧЕНКО',
        'БОЙКО',
        'КОВАЛЕНКО',
        'БОНДАРЕНКО',
        'ТКАЧЕНКО',
        'КОВАЛЬЧУК',
        'КРАВЧЕНКО',
        'ОЛІЙНИК',
        ];

        arr.forEach((item, index) => {
        const regexp_1 = /\s/gi;
        const regexp_2 = /\w/gi;
        const regexp_3 = /\d/gi;

        const result_1 = regexp_1.test(item);
        const result_2 = regexp_2.test(item);
        const result_3 = regexp_3.test(item);

        if (result_1 === true) {
            arr.splice(index, 1);
        }
        if (result_2 === true) {
            arr.splice(index, 1);
        }
        if (result_3 === true) {
            arr.splice(index, 1);
        }
        });

        console.log(arr);
        */
        public void deleteInvalidElements()
        {
            string[] arr ={
                "НПП Прізвище Кіл-ть Приблизно",
                "______________________в_ базіпо_Україні",
                "0-rt-rgfr", "8484fjdfkf",
                "МЕЛЬНИК",
                "ШЕВЧЕНКО",
                "БОЙКО",
                "КОВАЛЕНКО",
                "БОНДАРЕНКО",
                "ТКАЧЕНКО",
                "КОВАЛЬЧУК",
                "КРАВЧЕНКО",
                "ОЛІЙНИК"
            };

            foreach (string item in arr)
            {
                Console.WriteLine(item);
            }

            foreach (string item in arr)
            {
                string regexp_1 = @"\s";
                string regexp_2 = @"\w";
                string regexp_3 = @"\d";


                bool result_1 = Regex.IsMatch(item, regexp_1);
                bool result_2 = Regex.IsMatch(item, regexp_2);
                bool result_3 = Regex.IsMatch(item, regexp_3);

                if (result_1 == true)
                {
                    arr = arr.Where(val => val != item).ToArray();
                }
                if (result_2 == true)
                {
                    arr = arr.Where(val => val != item).ToArray();
                }
                if (result_3 == true)
                {
                    arr = arr.Where(val => val != item).ToArray();
                }
            }

            foreach (string item in arr)
            {
                Console.WriteLine(item);
            }
        }
    }
}