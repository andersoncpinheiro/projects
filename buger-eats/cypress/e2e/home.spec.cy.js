describe('home page', ()=>{
  it ('app deve estar online', ()=>{
    cy.viewport(1440, 1080) 
    cy.visit('https://buger-eats.vercel.app')
    //should função que valida, como parametro deve ter um texto 
    cy.get('#page-home main h1').should('have.text','Seja um parceiro entregador pela Buger Eats' )
  }) 
})