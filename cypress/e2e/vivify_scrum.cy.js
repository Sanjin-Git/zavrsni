/// <reference types="cypress" />

import { general } from '../page_objects/general'
import { loginPage } from '../page_objects/login'
import data from '../fixtures/data.json'
import { addBoardPage } from '../page_objects/addBoard'
import { editBoardPage } from '../page_objects/editBoard'

let token;
let userId;
let boardId;
let organization_id;


describe('Scrum positive test cases', () => {
    before('Visit Home Page', () => {
        cy.visit('/')
        cy.url().should('contain', 'https://cypress.vivifyscrum-stage.com/')
        general.headerLoginTitle.should('contain', data.headerTitleLogin)
    })

    it('Login', () => {
        cy.intercept('POST', 'https://cypress-api.vivifyscrum-stage.com/api/v2/login').as('validLogin');
        loginPage.login()
        cy.url().should('contain', 'https://cypress.vivifyscrum-stage.com/my-organizations');
        general.headerTitle.should('contain', data.headerTitle);
        cy.wait('@validLogin').then((intercept) => {
        expect(intercept.response.statusCode).to.eq(200)
        expect(intercept.response.body.user_id).to.eq(userId)
        token = intercept.response.body.token;
        userId = intercept.response.body.user_id;
        })
    })

    it('Add board', ()=> {
        cy.intercept('POST', 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards').as('add_board');
        addBoardPage.addBoard(Cypress.env('boardName'));
        cy.wait('@add_board').then((intercept) => {
            expect(intercept.response.statusCode).to.eq(201)
            boardId = intercept.response.body.id;
            organization_id = intercept.response.body.organization_id;
        })
    })

    it('Edit board', () => {
        editBoardPage.editBoard(boardId)
    })

    it('Delete Board BE', () => {
       cy.intercept('POST', `https://cypress-api.vivifyscrum-stage.com/api/v2/organizations/${organization_id}/boards-data`).as('deletedBoard');
        cy.request({
            method: "DELETE",
            url: `https://cypress-api.vivifyscrum-stage.com/api/v2/boards/${boardId}`,
            headers: {
                authorization: `Bearer ${token}`
            },
        }).then((response) => {
            expect(response.status).to.eq(200)
        })

    })

    it('Logout BE', () => {
        cy.logoutBE(token);
        cy.visit("/");
    })





})
    