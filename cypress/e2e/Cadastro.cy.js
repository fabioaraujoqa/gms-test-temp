/// <reference types="cypress" />

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  afterEach(() => {
    cy.screenshot()

  });

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `teste${Date.now()}@lcuas.com`
    cy.PreencherCadastro('Lucas', 'Cunha', email, '11999999999', 'Teste@1234')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('Deve Validar mensagem de errro com o campo nome inválido', () => {
    cy.PreencherCadastro('Lucas1', 'Cunha', 'fabio@teste.com', '11999999999', 'Teste@1234')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })

    it('Deve validar mensagem de erro com o campo sobrenome inválido', () => {
    cy.PreencherCadastro('Lucas', 'Cunha1', 'fabio@teste.com', '11999999999', 'Teste@1234')
    cy.get('#signup-response').should('contain', 'Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')
})
  
    it('Deve validar mensagem de erro com o campo email inválido', () => {
      cy.PreencherCadastro('Lucas', 'Cunha', 'fabio@teste', '11999999999', 'Teste@1234')
      cy.get('#signup-response').should('contain', 'Email inválido')
    })
  

    it('Deve validar mensagem de erro com o campo telefone inválido', () => {
      cy.PreencherCadastro('Lucas', 'Cunha', 'fabio@teste.com', '11E99999999', 'Teste@1234')
      cy.get('#signup-response').should('contain', 'Telefone deve conter apenas números')
})

    
    it.only('Deve validar mensagem de erro com o campo senha inválido', () => {
      cy.PreencherCadastro('Lucas', 'Cunha', 'fabio@teste.com', '11999999999', 'Teste')
      cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
})

})