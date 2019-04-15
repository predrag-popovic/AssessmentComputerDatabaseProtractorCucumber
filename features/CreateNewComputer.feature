Feature: Story 01 - Create new computer

    Background:
        Given Open computer database page
        And Click on button for add new computer

    @RegressionTest
    Scenario: TC01 Leave all field empty and try to add new computer
        When Leave all fields empty and click on button create this computer
        Then Verify that User will not create new computer and validation notification will activate on computer name

    @RegressionTest
    Scenario Outline: TC02 Enter valid data only for field Introduced date and try add new computer
        When Enter data only for field Introduced date "<testDataForIntroducedDate>"
        Then Click on button create this computer
        Then Verify that User will not create new computer and validation notification will activate on computer name

        Examples:
            | testDataForIntroducedDate |
            | 2016-11-15                |

    @RegressionTest
    Scenario Outline: TC03 Enter valid data only for field Discontinued date and try to add new computer
        When Enter data only for field Discontinued date "<testDataForDiscontinuedDate>"
        Then Click on button create this computer
        Then Verify that User will not create new computer and validation notification will activate on computer name

        Examples:
            | testDataForDiscontinuedDate |
            | 2018-10-10                  |