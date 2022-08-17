class LoginPage {

    get emailInput() {
        return cy.get('[type="email"]')
    }

    get passwordInput() {
        return cy.get('[type="password"]')
    }

    get signIn() {
        return cy.get('[type="submit"]')
    }

    login(email = Cypress.env('validEmail'), password = Cypress.env('validPassword')) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.signIn.click()
    } 

}

export const loginPage = new LoginPage()