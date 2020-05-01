Feature: Register Feature

    Background: Navigate on register page
        Given I am on 'register' page

    Scenario: As a user I am examine restration page
        When I navigate register page then all input field should be empty
        And I can see below field are mandatory
            | Salutation | First Name | Last Name | Telephone Number | Email | Password | Confim Password |
        And I can see email consent checkbox is unchecked
        Then I can see 'Create New Account' button is inActive

    Scenario Outline: As a user I check error message for each mandatory field
        When i click on 'Create New Account' button
        Then I should see '<field error message>'
        Examples:
            | field error message          |
            | First Name is required       |
            | Last Name is required        |
            | Telephone Number is required |
            | Email is required            |
            | Password is required         |
            | Confirm Password is required |

    Scenario Outline: As a user I am not able to register successfuly with passing least data
        When I select salutation 'Mr'
        And I fill specific '<Field>' with given '<Data>'
        And I click on 'Create New Account' button
        Then I should not able to register successfully
        Examples:
            | Field            | Data                  |
            | First Name       | John                  |
            | Last Name        | Test                  |
            | Telephone        | 07123456789           |
            | Email            | john.test@gmail.co.uk |
            | Password         | Test@123              |
            | Confirm Password | Test@123              |

    Scenario: As a user I am able to register successfully with checked email consent
        When I select default salutation 'Mr'
        And   I complete contact detail page by passing below data:
            | Title | First Name | Last Name | Telephone   | Email                 | Password | Confirm Password |
            | Mr    | John       | Test      | 07771222333 | john.test@gmail.co.uk | Test@123 | Test@123         |
        And I can see email consent checkbox is checked by default
        And I can see 'Create New Account' is enabled
        And I click on 'Create New Account' button
        Then I should able to register successfully

    Scenario: As a user I am able to register successfully with unchecked email consent
        When I select default salutation 'Mr'
        And   I complete contact detail page by passing below data:
            | Title | First Name | Last Name | Telephone   | Email                 | Password | Confirm Password |
            | Mr    | John       | Test      | 07771222333 | john.test@gmail.co.uk | Test@123 | Test@123         |
        And I unchecked email consent checkbox
        And I click on 'Create New Account' button
        Then I should able to register successfully

    Scenario: As a user I am not able to register with existing registered email
        When I select default salutation 'Mr'
        And   I complete contact detail page by passing below data:
            | Title | First Name | Last Name | Telephone   | Email                | Password | Confirm Password |
            | Mr    | Test       | Test      | 07771222333 | test150420@gmail.com | Test@123 | Test@123         |
        And I click on 'Create New Account' button
        Then I should see error message 'Email already exist.'
        And I should see 'Please Login Here' link


