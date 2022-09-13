Feature: Login POC

Scenario: Login Test
Given I go to the "home" page
When I login with email "org.carely@gmail.com" and password "12345678"
Then I will validate the redirection to "facilities" page