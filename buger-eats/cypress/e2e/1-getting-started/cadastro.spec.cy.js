describe('Cadastro', ()=>{
    it ('Usuário deve se tornar um entregador', ()=>{
        cy.viewport(1440, 1080) 
        cy.visit('https://buger-eats.vercel.app')
        //montado buscado css no inspec e selecionado o evento de click, que neste caso é uma rota
        cy.get('a[href="/deliver"]').click() 
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas' )

        var entregador = {
            nome: 'Anderson',
            cpf: '45184316698',
            email:'email@email.com.br',
            whatsapp:'8599999999'
        }

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="name"]').type(entregador.cpf)
        cy.get('input[name="name"]').type(entregador.email)
        cy.get('input[name="name"]').type(entregador.whatsapp)
    }) 
  })