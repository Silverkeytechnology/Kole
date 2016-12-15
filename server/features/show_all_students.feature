Feature: Show list of all students
  As a developer of the system
  So that I can work with the data
  I want to see the list of all students in the system

  Scenario: List all students in the system
    Given there are students in the system
    When the client requests for a list of students
    Then the response should be the list of all students in the system
