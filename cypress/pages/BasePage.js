class BasePage {

    enterText(locator, text) {
        locator().clear().type(text)
    }

    click(locator) {
        locator().click()
    }

    doubleClick(locator) {
        locator().dblclick()
    }

    hover(locator) {
        locator().realHover()
    }

    selectOption(locator, value) {
        locator().select(value)
    }

    selectMultipleOptions(locator, values) {
        locator().select(values)
    }

    check(locator, values) {
        locator().check(values)
    }

    clickOutside() {
        cy.get("body").click(0, 0)
    }

    clickElementContaining(locator, text) {
        locator().contains(text).click()
    }

    verifyValue(locator, expectedValue) {
        locator().should("have.value", expectedValue)
    }

    verifyChecked(locator) {
        locator().should("be.checked")
    }

    verifyCheckedValue(locator, value) {
        locator()
            .filter(`[value="${value}"]`)
            .should("be.checked")
    }

    verifyContainsText(locator, expectedText) {
        locator().should("contain.text", expectedText)
    }
}

export default BasePage