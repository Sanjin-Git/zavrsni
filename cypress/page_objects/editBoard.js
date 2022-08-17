class EditBoardPage {

    lastBoard(boardId) {
        return cy.get(`[href="/boards/${boardId}"]`).first()
    }

    configureBoard(boardId) {
        return cy.get(`[href="/boards/${boardId}/settings"]`)
    }

    get boardName() {
        return cy.get('[name="name"]')
    }
    
    get boardDescription() {
        return cy.get('[name="description"]')
    }

    get submitBtn() {
        return cy.get('[class="vs-c-btn vs-c-btn--primary vs-c-btn--spaced vs-u-font-weight-bold vs-c-btn-auth--top-gap"]')
    }

    editBoard(boardId, editedName = Cypress.env('editedBoardName'), description = Cypress.env('boarDescription')) {
       this.lastBoard(boardId).click()
       this.configureBoard(boardId).click()
       this.boardName.clear().type(editedName)
       this.boardDescription.type(description)
       this.submitBtn.click()
    } 
}

export const editBoardPage = new EditBoardPage()
