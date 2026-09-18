import DialogPage from "../pages/DialogPage"

const dialogPage = new DialogPage()

describe("UI Interaction Practice", () => {

    beforeEach(() => {
        cy.visit("/")
    })

    it("should handle the simple alert", () => {
        cy.on("window:alert", (alertText) => {
            expect(alertText).to.equal("I am an alert box!")
        })

        dialogPage.clickSimpleAlert()
    })

    it("should cancel the confirmation dialog", () => {
        cy.on("window:confirm", (alertText) => {
            expect(alertText).to.equal("Press a button!")
            return false
        })

        dialogPage.clickConfirmationDialog()

        dialogPage.elements.confirmationResult()
            .should("contain.text", "You pressed Cancel!")
    })

    it("should handle the prompt dialog with a user name", () => {
        const promptName = "Zainab Abbas"

        cy.window().then((win) => {
            cy.stub(win, "prompt").returns(promptName)
        })

        dialogPage.clickPromptDialog()

        dialogPage.elements.promptText()
            .should(
                "have.text",
                `Hello ${promptName}! How are you today?`
            )
    })

    it("should display and select an option from the hover dropdown", () => {
        dialogPage.hoverOverDropdown()

        dialogPage.elements.hoverDropdown()
            .should("be.visible")

        dialogPage.selectHoverOption("Mobiles")

        dialogPage.elements.hoverDropdown()
            .should("not.be.visible")
    })

    it("should copy Field 1 value to Field 2 after double click", () => {
        dialogPage.elements.inputFieldTwo()
            .should("have.value", "")

        dialogPage.doubleClickButton()

        dialogPage.elements.inputFieldOne()
            .invoke("val")
            .then((fieldOneValue) => {

                expect(fieldOneValue).to.not.be.empty

                dialogPage.elements.inputFieldTwo()
                    .should("have.value", fieldOneValue)
            })
    })

    it("should drag the element into the drop container", () => {
        dialogPage.dragAndDrop()

        dialogPage.elements.droppableContainer()
            .should("contain.text", "Dropped!")
    })
})