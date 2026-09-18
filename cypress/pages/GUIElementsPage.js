import BasePage from "./BasePage"
import { splitDate } from "../utils/helper"

class GUIElementsPage extends BasePage {

    elements = {

        // Form input elements
        nameInput: () => cy.get("#name"),
        emailInput: () => cy.get("#email"),
        phoneInput: () => cy.get("#phone"),
        addressTextarea: () => cy.get("#textarea"),

        // Gender and days selection
        genderRadios: () => cy.get("input[name='gender']"),
        daysCheckboxes: () => cy.get(".form-check input[type='checkbox']"),

        // Dropdowns
        countryDropdown: () => cy.get("#country"),
        colorsDropdown: () => cy.get("#colors"),
        animalsDropdown: () => cy.get("#animals"),

        // First date picker
        datePickerOneInput: () => cy.get("#datepicker"),

        // Second date picker
        datePickerTwoInput: () => cy.get("#txtDate"),
        datePickerTwoMonthsDropdown: () =>
            cy.get("select.ui-datepicker-month"),
        datePickerTwoYearsDropdown: () =>
            cy.get("select.ui-datepicker-year"),
        datePickerTwoDays: () =>
            cy.get("table.ui-datepicker-calendar a.ui-state-default"),

        // Date range
        startDateInput: () => cy.get("#start-date"),
        endDateInput: () => cy.get("#end-date"),
        dateRangeSubmitButton: () => cy.get("button.submit-btn"),
        dateRangeResult: () => cy.get("#result")
    }

    selectDateWithDatePickerOne(date) {
        this.enterText(
            this.elements.datePickerOneInput,
            date
        )

        this.clickOutside()
    }

    selectDateWithDatePickerTwo(date) {
        const { month, day, year } = splitDate(date)

        this.click(this.elements.datePickerTwoInput)

        this.selectOption(
            this.elements.datePickerTwoMonthsDropdown,
            month
        )

        this.selectOption(
            this.elements.datePickerTwoYearsDropdown,
            year
        )

        this.clickElementContaining(
            this.elements.datePickerTwoDays,
            day
        )
    }

    submitDateRange(startDate, endDate) {
        this.enterText(
            this.elements.startDateInput,
            startDate
        )

        this.enterText(
            this.elements.endDateInput,
            endDate
        )

        this.click(
            this.elements.dateRangeSubmitButton
        )
    }
}

export default GUIElementsPage