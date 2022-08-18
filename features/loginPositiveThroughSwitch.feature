Feature: The user logs into the site with valid credentials

    Scenario Outline: As an registered user, I can log into the site

        Given I navigate to 'urlClass'.'shop'
        When I login as 'positiveUser'
        Then I expect that message of 'loginPageInteraction'.'userName' is equal: '<message>'

        Examples:
            | message           |
            | Welcome back Name |