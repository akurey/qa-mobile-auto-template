@Dev
Feature: Login
    Scenario: Login - Bad email format
        Given I go to the Sign In screen
        When I login with email "androidmailinator.com" and password "12345678"
        Then The Sign in button must be disabled

    Scenario: Login - Password has less than 8 characters
        When I login with email "android@mailinator.com" and password "1234567"
        Then The Sign in button must be disabled

    Scenario: Login - Success
        When I login with email "automation@mailinator.com" and password "12345678"
            And I skip touch ID
        Then I must be on the Care Feed screen

