Feature: The user registers his account on the site

    Scenario Outline: As a new user, I can register my account on the site

        Given I navigate to 'urls'.'shop'
        When I register an account with credentials:
            | First_Name | Last_Name | E_Mail           | Address_1 | City      | ZIP_Code | Country | Region_State | Login_name | Password | Password_Confirm |
            | Name5      | Surname5  | email@test5.test | Address 1 | Bialystok | 000 AAA  | Poland  | Podlaskie    | LoginName5 | Password | Password         |
        Then I expect that message of 'registerPageInteraction'.'successedPage' is equal: '<Message>'
        Examples:
            | Message                        |
            | YOUR ACCOUNT HAS BEEN CREATED! |