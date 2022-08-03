const loginCredentials = [
  {
    login: 'Login1234',
    password: 'Password',
    selector: '//*[text()="Welcome back Name"]',
  },
  { login: 'Login1234', password: 'Passwor', selector: '[class^="alert"]' },
  { login: '', password: 'Passwor', selector: '[class^="alert"]' },
  { login: 'Login1234', password: '', selector: '[class^="alert"]' },
  { login: '', password: '', selector: '[class^="alert"]' },
];

module.exports = { loginCredentials };
