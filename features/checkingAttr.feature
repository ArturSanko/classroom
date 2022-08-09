@checkingAttr
Feature: HTML's attribute

    Scenario: Check HTML's attribute

        When I open the URL 'https://ya.ru'
        Then I expect elements attributes:
            | element     | attribute | value               |
            | .home-link2 | href.     | https://ya.ru/?nr=1 |
            | input       | name.     | text2               | 
            