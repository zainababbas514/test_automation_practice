import WebTablesPage from "../pages/WebTablesPage"

const webTablesPage = new WebTablesPage()

describe("Practice Web Tables", () => {

    beforeEach(() => {
        cy.visit("/")
    })

    it("should verify the correct price for the book", () => {
        webTablesPage.verifyBookPrice(
            "Master In Selenium",
            "3000"
        )
    })

    it("should verify browser metrics match the display value", () => {
        webTablesPage.verifyBrowserMetrics(
            "Chrome",
            "CPU (%)",
            webTablesPage.elements.displayValuesChromeCpu
        )
    })

    it("should select a product from the pagination table", () => {
        webTablesPage.selectProduct("Fitness Tracker")
    })
})