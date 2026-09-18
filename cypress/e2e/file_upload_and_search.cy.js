import FileUploadAndSearchPage from "../pages/FileUploadAndSearchPage"

const fileUploadAndSearchPage = new FileUploadAndSearchPage()

describe("File Upload and Wikipedia Search Practice", () => {

    beforeEach(() => {
        cy.visit("/")
    })

    it("should upload a single file successfully", () => {
        const filePath = "cypress/fixtures/image_one.jpg"

        fileUploadAndSearchPage.uploadSingleFile(filePath)
    })

    it("should upload multiple files successfully", () => {
        const filesToUpload = [
            "cypress/fixtures/image_one.jpg",
            "cypress/fixtures/image_two.jpg"
        ]

        fileUploadAndSearchPage.uploadMultipleFiles(filesToUpload)
    })

    it("should display Wikipedia search results for the entered search term", () => {
        const searchText = "Cypress"

        fileUploadAndSearchPage.searchWikipedia(searchText)

        fileUploadAndSearchPage.elements.wikipediaSearchResults()
            .should("have.length.greaterThan", 0)
            .each((element) => {
                expect(element.text().toLowerCase())
                    .to.contain(searchText.toLowerCase())
            })
    })
})