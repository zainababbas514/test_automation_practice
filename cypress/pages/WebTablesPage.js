import BasePage from "./BasePage"

class WebTablesPage extends BasePage {

    elements = {
        // Book table
        bookTable: () => cy.get("table[name='BookTable']"),
        bookTablePriceColumn: () => cy.get("td:nth-child(4)"),

        // Browser metrics table
        browserMetricsTable: () => cy.get("table#taskTable"),
        displayValuesChromeCpu: () =>
            cy.get("#displayValues strong.chrome-cpu"),

        // Products table
        productsTable: () => cy.get("#productTable"),
        activePage: () => cy.get("#pagination a.active"),
        productsNameColumn: () => cy.get("tr td:nth-child(2)")
    }

    verifyBookPrice(bookName, price) {
        this.elements.bookTable()
            .scrollIntoView()
            .find("tr")
            .contains(bookName)
            .closest("tr")
            .find("td:nth-child(4)")
            .should("have.text", price)
    }

    getColumnIndex(table, columnName) {
        let columnIndex

        return table()
            .find("tr:first th")
            .each(($header, index) => {
                if ($header.text().trim() === columnName) {
                    columnIndex = index
                }
            })
            .then(() => {
                expect(columnIndex).to.not.be.undefined
                return columnIndex
            })
    }

    verifyBrowserMetrics(browserName, column, displayValueLocator) {
        this.getColumnIndex(
            this.elements.browserMetricsTable,
            column
        ).then((index) => {

            this.elements.browserMetricsTable()
                .find("tr:not(:first)")
                .contains(browserName)
                .closest("tr")
                .find("td")
                .eq(index)
                .invoke("text")
                .then((tableValue) => {

                    displayValueLocator()
                        .invoke("text")
                        .should("equal", tableValue.trim())
                })
        })
    }

    selectProduct(productName) {
        this.getColumnIndex(
            this.elements.productsTable,
            "Select"
        ).then((index) => {

            this.elements.productsTable()
                .find("tr td:nth-child(2)")
                .then((products) => {

                    const productFound = [...products].some(
                        (product) =>
                            product.innerText.trim() === productName
                    )

                    if (productFound) {

                        this.elements.productsTable()
                            .contains(productName)
                            .closest("tr")
                            .find("td")
                            .eq(index)
                            .find("input[type='checkbox']")
                            .check()
                    } else {
                        this.goToNextPage()
                        this.selectProduct(productName)
                    }
                })
        })
    }

    goToNextPage() {
        this.elements.activePage()
            .parent()
            .next()
            .find("a")
            .should("be.visible")
            .click()
    }
}

export default WebTablesPage