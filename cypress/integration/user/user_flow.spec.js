// in this test performing all the possible action which are
// checking user card
// like 1st card
// edit email and phone Number of last card 
// delete last card 

describe('user app flow ', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('check user card render', () => {
        cy.get('.user-card').should('be.visible');
    })

    it('like user card', () => {
        cy.get('.user-card').first().find('#like').click();
        cy.wait(5000);
    })

    it('edit phone and email', () => {
        var phone = '+91 8878134831'
        var email = 'akshansh.verma@gmail.com';
        cy.get('.user-card').last().find('#edit').click();
        cy.get('[name=Phone]').type(phone);
        cy.get('[name=Email]').type(email);
        cy.get('button').should('contain', 'SAVE');
        cy.get('#save').click();
        cy.get('.user-card').last().find('#email-sp').should('contain', email);
        cy.get('.user-card').last().find('#phone-sp').should('contain', phone);
        cy.wait(5000);
    })

    it('delete user card', () => {
        cy.get('.user-card')
            .then(listing => {
                const cardLength = Cypress.$(listing).length;
                cy.get('.user-card').last().find('#delete').click();
                cy.get('.user-card').should('have.length', cardLength - 1);
            });
        cy.wait(5000);
    })

});