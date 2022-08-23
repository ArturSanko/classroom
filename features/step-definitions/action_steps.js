const { Given, When, Then } = require('@wdio/cucumber-framework');
const { World } = require('@wdio/cucumber-framework');
const { defineParameterType } = require('@cucumber/cucumber');

/**
 * Add two number.
 *
 * EXAMPLES:
 * When I add 2 and 2
 * When I add 4 and 4
 *
 * @param a
 * @param b
 */
When(/^I add ([^]*) and ([^]*)$/, async (a, b) => {
  async function sum(...num) {
    const result = num
      .map((item) => Number(item))
      .reduce((sum, current) => sum + current, 0);
    return String(result);
  }

  //   let aNum = a;
  //   let bNum = b;

  //   defineParameterType({
  //     regexp: /([^]*)/,
  //     transformer: (value) => Number(value),
  //     name: 'toNumber',
  //   });

  //   aNum.defineParameterType();
  //   bNum.defineParameterType();

  this.result = await sum(a, b);
  //   this.result = aNum + bNum;
});

// 2. Using data transformation for parameter type, create transormation "<current data>" string to current data
// - Use the defineParameterType CucumberJS function for data transformation
// https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/api_reference.md
// https://github.com/cucumber/cucumber-js/blob/main/features/parameter_types.feature

// let a = '6'
// console.log('old: ' + a);
// defineParameterType({
//   regexp: /([^]*)/,
//   transformer: (value) => Number(value),
//   name: 'toNumber',
// });
// console.log('new a: ' + a.defineParameterType());

// async function defineParameterType(value, type) {
//     let result;
//     switch (type) {
//       case 'String':
//         result = String(value);
//         break;
//       case 'Number':
//         result = Number(value);
//         break;
//       case 'Boolean':
//         result = Boolean(value);
//         break;
//     }
//     return result
//   }

//   let a = 5;
//   console.log(typeof a);
//   a = await defineParameterType(a, 'String');
//   console.log(typeof a);
