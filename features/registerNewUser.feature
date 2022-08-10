Feature: The user registers his account on the site

    Scenario Outline: As a new user, I can register my account on the site

        Given I am go to 'https://automationteststore.com/' page
        When I register an account with credentials:
            | First_Name | Last_Name | E_Mail           | Address_1 | City      | ZIP_Code | Country | Region_State | Login_name | Password | Password_Confirm |
            | Name2      | Surname2  | email@test2.test | Address 1 | Bialystok | 000 AAA  | Poland  | Podlaskie    | LoginName2 | Password | Password         |
        Then I should get message as: '<Message>'
        Examples:
            | Message                        |
            | YOUR ACCOUNT HAS BEEN CREATED! |