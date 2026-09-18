import GUIElementsPage from "../pages/GUIElementsPage"

const guiElementsPage = new GUIElementsPage()

describe("GUI Elements Practice", () => {

    beforeEach(() => {
        cy.visit("/")
    })

    it("should enter valid information in the form fields", () => {
        const name = "Zainab Abbas"
        const email = "zainababbas078@gmail.com"
        const phone = "7523884910"
        const address =
            "221 Baker Street, London NW1 6XE, United Kingdom"

        guiElementsPage.enterText(
            guiElementsPage.elements.nameInput,
            name
        )

        guiElementsPage.enterText(
            guiElementsPage.elements.emailInput,
            email
        )

        guiElementsPage.enterText(
            guiElementsPage.elements.phoneInput,
            phone
        )

        guiElementsPage.enterText(
            guiElementsPage.elements.addressTextarea,
            address
        )

        guiElementsPage.verifyValue(
            guiElementsPage.elements.nameInput,
            name
        )

        guiElementsPage.verifyValue(
            guiElementsPage.elements.emailInput,
            email
        )

        guiElementsPage.verifyValue(
            guiElementsPage.elements.phoneInput,
            phone
        )

        guiElementsPage.verifyValue(
            guiElementsPage.elements.addressTextarea,
            address
        )
    })

    it("should select gender and multiple days", () => {
        const gender = "female"
        const days = ["friday", "saturday", "sunday"]

        guiElementsPage.check(
            guiElementsPage.elements.genderRadios,
            gender
        )

        guiElementsPage.check(
            guiElementsPage.elements.daysCheckboxes,
            days
        )

        guiElementsPage.verifyCheckedValue(
            guiElementsPage.elements.genderRadios,
            gender
        )

        days.forEach((day) => {
            guiElementsPage.verifyCheckedValue(
                guiElementsPage.elements.daysCheckboxes,
                day
            )
        })
    })

    it("should select values from dropdowns", () => {
        const country = "china"
        const colors = ["blue", "yellow"]
        const animals = ["cat", "dog"]

        guiElementsPage.selectOption(
            guiElementsPage.elements.countryDropdown,
            country
        )

        guiElementsPage.selectMultipleOptions(
            guiElementsPage.elements.colorsDropdown,
            colors
        )

        guiElementsPage.selectMultipleOptions(
            guiElementsPage.elements.animalsDropdown,
            animals
        )

        guiElementsPage.verifyValue(
            guiElementsPage.elements.countryDropdown,
            country
        )

        guiElementsPage.elements.colorsDropdown()
            .invoke("val")
            .should("deep.equal", colors)

        guiElementsPage.elements.animalsDropdown()
            .invoke("val")
            .should("deep.equal", animals)
    })

    it("should select a date using the first date picker", () => {
        const date = "12/20/2026"

        guiElementsPage.selectDateWithDatePickerOne(date)

        guiElementsPage.verifyValue(
            guiElementsPage.elements.datePickerOneInput,
            date
        )
    })

    it("should select a date using the second date picker", () => {
        const date = "06/10/2028"

        guiElementsPage.selectDateWithDatePickerTwo(date)

        guiElementsPage.verifyValue(
            guiElementsPage.elements.datePickerTwoInput,
            date
        )
    })

    it("should calculate the selected date range", () => {
        const startDate = "2026-10-12"
        const endDate = "2027-12-20"

        guiElementsPage.submitDateRange(
            startDate,
            endDate
        )

        const start = new Date(startDate)
        const end = new Date(endDate)

        const diffTime = Math.abs(end - start)

        const diffDays = Math.ceil(
            diffTime / (1000 * 60 * 60 * 24)
        )

        guiElementsPage.verifyValue(
            guiElementsPage.elements.startDateInput,
            startDate
        )

        guiElementsPage.verifyValue(
            guiElementsPage.elements.endDateInput,
            endDate
        )

        guiElementsPage.verifyContainsText(
            guiElementsPage.elements.dateRangeResult,
            diffDays
        )
    })
})