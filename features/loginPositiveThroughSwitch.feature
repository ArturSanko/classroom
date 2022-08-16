Feature: The user logs into the site with valid credentials

    Scenario Outline: As an registered user, I can log into the site

        Given I navigate to 'https://automationteststore.com/'
        When I login as 'positiveUser'
        Then I should get my name on the page as: '<message>'

        Examples:
            | message           |
            | Welcome back Name |
