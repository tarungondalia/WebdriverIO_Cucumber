Feature: Company Data Capture
    As a user
    I want to capture company data
    So that I can use it for other purpose

    Scenario Outline: Company '<companynameletter>'
        Given I navigate to company list page starting with '<companynameletter>'
        When I collect the data for First Company
        And I collect the data for Third Company
        Then I collect the data for Last Company

        Examples:
            | companynameletter |
            |         A         |
            |         B         |
            |         C         |
            |         D         |
            |         E         |
            |         F         |
            |         G         |
            |         H         |
            |         I         |
            |         J         |
            |         K         |
            |         L         |
            |         M         |
            |         N         |
            |         O         |
            |         P         |
            |         Q         |
            |         R         |
            |         S         |
            |         T         |
            |         U         |
            |         V         |
            |         W         |
            |         Z         |

