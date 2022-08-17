class General {

    get headerLoginTitle () {
        return cy.get ('h1')
    }
   
    get headerTitle () {
        return cy.get ('.vs-l-sprint__name > .vs-u-text--uppercase')
    }
}

export const general = new General()