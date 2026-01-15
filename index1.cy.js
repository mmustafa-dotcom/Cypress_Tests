describe('E-gov', ()=>{
    it('test', ()=>{
        cy.visit('https://www.e-gov.az/')
        cy.get('.relative > .p-3').click({force: true})
       

        cy.origin('https://digital.login.gov.az', () => {
        cy.get('body').invoke('removeAttr','target').click()
        cy.get('.button-section > :nth-child(2)').click()
        })


        // cy.origin('https://digital.login.gov.az', () => {
        //     cy.get('.button-section > :nth-child(2)').should('be.visible').click({multiple: true})
        // })
    })
})