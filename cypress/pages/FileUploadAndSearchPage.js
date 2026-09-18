import BasePage from "./BasePage"

class FileUploadAndSearchPage extends BasePage {

    elements = {
        singleFileInput: () => cy.get("#singleFileInput"),
        uploadSingleFileButton: () =>
            cy.get("#singleFileForm button"),

        multipleFileInput: () => cy.get("#multipleFilesInput"),
        uploadMultipleFilesButton: () =>
            cy.get("#multipleFilesForm button"),

        wikipediaSearchField: () =>
            cy.get("#Wikipedia1_wikipedia-search-input"),

        submitSearchButton: () =>
            cy.get(".wikipedia-search-button"),

        wikipediaSearchResults: () =>
            cy.get("#wikipedia-search-result-link a")
    }

    uploadSingleFile(filePath) {
        this.elements.singleFileInput()
            .selectFile(filePath)

        this.click(
            this.elements.uploadSingleFileButton
        )
    }

    uploadMultipleFiles(filePaths) {
        this.elements.multipleFileInput()
            .selectFile(filePaths)

        this.click(
            this.elements.uploadMultipleFilesButton
        )
    }

    searchWikipedia(searchText) {
        this.enterText(
            this.elements.wikipediaSearchField,
            searchText
        )

        this.click(
            this.elements.submitSearchButton
        )
    }
}

export default FileUploadAndSearchPage