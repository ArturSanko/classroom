Feature: The user logs into the site with invalid credentials

  Scenario Outline: As an unregistered user, I can not log into the site

    Given I navigate to 'https://automationteststore.com/'
    When I login with '<username>' and '<password>'
    Then I should get an error message saying '<message>'

    Examples:
      | username  | password | message                                     |
      | Login1234 | Passwor  | Error: Incorrect login or password provided |
      |           | Passwor  | Error: Incorrect login or password provided |
      | Login1234 |          | Error: Incorrect login or password provided |
      |           |          | Error: Incorrect login or password provided |
