class AddBoardPage {

    get addBoardBtn() {
        return cy.get('[class="vs-c-my-organization__board vs-c-my-organization__board-new"]')
    }

    get nameInput() {
        return cy.get('[name="name"]').last()
    }

    get nextBtn() {
        return cy.get('[name="next_btn"]')
    }

    get canbanBtn() {
        return cy.get('[name="type_kanban"]')
    }

    get next2Btn() {
        return cy.get('[name="next_btn"]')
    }

    get next3Btn() {
        return cy.get('[name="next_btn"]')
    }

    get finishBtn() {
        return cy.get('[name="next_btn"]')
    }
    
    addBoard(name = Cypress.env('boardName')) {
        this.addBoardBtn.click()
        this.nameInput.type(name)
        this.nextBtn.click()
        this.canbanBtn.click()
        this.nextBtn.click()
        this.next2Btn.click()
        this.next3Btn.click()
        this.finishBtn.click()        
    } 

}

export const addBoardPage = new AddBoardPage()