Feature: Story 02 - Update computer

    Background:
        Given Open computer database page
        And Click on button for add new computer
        And Add new computer

    @SmokeTest
    Scenario: TC01 Remove computer name and try to save these changes
        When Select Computer and try to update with empty field for computer name
        Then Verify that User will not update computer data if he remove name and validation notification will activate on computer name
