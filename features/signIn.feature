Feature: Sign In Feature

    Background: Navigate on Login Page
        Given I am on 'login' page

    Scenario: As a user I can able to successfully login
        When I enter 'correct' email address
        And I enter 'correct' password
        And I click on "login" button
        Then I should able to login successfully
        And I Logout

    Scenario: As a user I am not able to login with wrong credentials
        When I enter 'wrong' email address
        And I enter 'wrong' password
        And I click on "login" button
        Then I should see error message for 'wrong credentials'

    Scenario: As a user I am not able to login with correct email and wrong password
        When I enter 'correct' email address
        And I enter 'wrong' password
        And I click on "login" button
        Then I should see error message for 'correct email and wrong password'

    Scenario: As a user I am not able to login with wrong email and correct password
        When I enter 'wrong' email address
        And I enter 'correct' password
        And I click on "login" button
        Then I should see error message for 'wrong credentials'


