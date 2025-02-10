Feature: Home Page Redirection

  Scenario: Redirect from /home to root path
    When I visit the "/home" page
    Then I should be redirected to "/home"
    And I should see the landing page