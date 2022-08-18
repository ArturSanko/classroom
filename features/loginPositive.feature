Feature: The user logs into the site with valid credentials

    Scenario Outline: As an registered user, I can log into the site

        Given I navigate to 'urls'.'shop'
        When I login with '<username>' and '<password>'
        Then I expect that message of 'loginPageInteraction'.'userName' is equal: '<message>'

        Examples:
            | username  | password | message           |
            | Login1234 | Password | Welcome back Name |