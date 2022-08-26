const { When } = require('@wdio/cucumber-framework');
const { defineParameterType } = require('@cucumber/cucumber');

const { addAttachment } = require('@wdio/allure-reporter').default;

defineParameterType({
  regexp: /\d/,
  transformer: (num) => Number(num),
  name: 'toNumber',
  useForSnippets: false,
  // preferForRegexpMatch: true,
});

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

  //   const aNum = a.defineParameterType({
  //     regexp: /\d/,
  //     transformer: (num) => Number(num),
  //     name: 'toNumber',
  //     useForSnippets: false,
  //     // preferForRegexpMatch: true,
  //   });
  //   console.log(`aNum: ${aNum} typeof: ${typeof aNum}`);
  //   const bNum = b.defineParameterType({
  //     regexp: /\d/,
  //     transformer: (num) => Number(num),
  //     name: 'toNumber',
  //     useForSnippets: false,
  //     // preferForRegexpMatch: true,
  //   });
  addAttachment('Number for sum', [a, b], 'application/json');
  this.result = await sum(a, b);
  //   this.result = aNum + bNum;
});

// 2. Using data transformation for parameter type, create transormation "<current data>" string to current data
// - Use the defineParameterType CucumberJS function for data transformation
// https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/api_reference.md
// https://github.com/cucumber/cucumber-js/blob/main/features/parameter_types.feature
// https://cucumber.io/blog/bdd/understanding-screenplay-(part-3)/?sbsearch=defineParameterType
// https://github.com/cucumber/cucumber-expressions#readme

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
