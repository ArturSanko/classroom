Feature: HTML's attribute

    Scenario: Check HTML's attribute

        Given I navigate to 'urls'.'yandex'
        Then I expect elements attributes:
            | element     | attribute | value               |
            | .home-link2 | href.     | https://ya.ru/?nr=1 |
            | input       | name.     | text2               |
