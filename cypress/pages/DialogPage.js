import BasePage from "./BasePage"

class DialogPage extends BasePage {

    elements = {
        // Alerts and dialogs
        simpleAlert: () => cy.get("#alertBtn"),
        confirmationDialog: () => cy.get("#confirmBtn"),
        confirmationResult: () => cy.get("#demo"),
        promptDialog: () => cy.get("#promptBtn"),
        promptText: () => cy.get("#demo"),

        // Mouse hover
        mouseOverButton: () => cy.get("button.dropbtn"),
        hoverDropdown: () => cy.get(".dropdown-content"),

        // Double click
        doubleClickButton: () => cy.get("#HTML10 button"),
        inputFieldOne: () => cy.get("#HTML10 #field1"),
        inputFieldTwo: () => cy.get("#HTML10 #field2"),

        // Drag and drop
        draggableElement: () => cy.get("#draggable"),
        droppableContainer: () => cy.get("#droppable")
    }

    clickSimpleAlert() {
        this.elements.simpleAlert().click()
    }

    clickConfirmationDialog() {
        this.elements.confirmationDialog().click()
    }

    clickPromptDialog() {
        this.elements.promptDialog().click()
    }

    hoverOverDropdown() {
        this.elements.mouseOverButton()
            .realHover()
    }

    selectHoverOption(option) {
        this.elements.hoverDropdown()
            .should("be.visible")
            .contains(option)
            .click()
    }

    doubleClickButton() {
        this.elements.doubleClickButton()
            .dblclick()
    }

    dragAndDrop() {
        this.elements.draggableElement()
            .realMouseDown()
            .realMouseMove(0, 10)
            .wait(200)

        this.elements.droppableContainer()
            .realMouseMove(0, 0, {
                position: "center"
            })
            .realMouseUp()
    }
}

export default DialogPage