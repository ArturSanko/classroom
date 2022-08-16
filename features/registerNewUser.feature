Feature: The user registers his account on the site

    Scenario Outline: As a new user, I can register my account on the site

        Given I navigate to 'https://automationteststore.com/'
        When I register an account with credentials:
            | First_Name | Last_Name | E_Mail           | Address_1 | City      | ZIP_Code | Country | Region_State | Login_name | Password | Password_Confirm |
            | Name3      | Surname3  | email@test3.test | Address 1 | Bialystok | 000 AAA  | Poland  | Podlaskie    | LoginName3 | Password | Password         |
        Then I should get message as: '<Message>'
        Examples:
            | Message                        |
            | YOUR ACCOUNT HAS BEEN CREATED! |