# const { urls } = require('/data/urls');

Feature: The user logs into the site with valid credentials

    Scenario Outline: As an registered user, I can log into the site

        Given I navigate to 'https://automationteststore.com/'
        When I login with '<username>' and '<password>'
        Then I should get my name on the page as: '<message>'

        Examples:
            | username  | password | message           |
            | Login1234 | Password | Welcome back Name |
