describe('Central de Atendimento ao Cliente TAT', () => {   //describe = suíte de testes

  beforeEach(() => {  //executa antes de cada caso de teste
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Pereira da Silva')
    cy.get('#email').type('joao@email.com')
    cy.get('#open-text-area').type('Teste de preenchimento')
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible', 'Mensagem enviada com sucesso.')


  })

  it('preenche os campos obrigatórios e envia o formulário TEXTO GRANDE COM DELAY 0', () => {
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Pereira da Silva')
    cy.get('#email').type('joao@email.com')
    cy.get('#open-text-area').type('Teste de preenchimento')
    cy.get('.button').should('have.text', 'Enviar').click()
    cy.get('.success').should('be.visible', 'A fuga silenciosa e coordenada lembra a cena emblemática registrada em 2010, quando traficantes escaparam por uma trilha entre a Vila Cruzeiro e o Complexo do Alemão, durante uma grande operação policial que ficou marcada na história da segurança pública do RJ.', {
      delay: 0
    })
  })

  it('Verifica se o campo Tefelone aceita apenas números', () => {
    cy.get('#phone').type('Amanda').should('have.value', '')

  })

  it('Marca telefone como meio de contato preferencial, mas não preenche o campo telefone', () => {
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Pereira da Silva')
    cy.get('#email').type('joao@email.com')
    cy.get('#open-text-area').type('Teste de preenchimento')
    cy.get('#phone-checkbox').check()
    cy.get('.button').should('have.text', 'Enviar').click()
    cy.get('.error').should('be.visible', 'Valide os campos obrigatórios!')

  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName').type('João').should('have.value', 'João').clear().should('have.value', '')
    cy.get('#lastName').type('Pereira da Silva').should('have.value', 'Pereira da Silva').clear().should('have.value', '')
    cy.get('#email').type('joao@email.com').should('have.value', 'joao@email.com').clear().should('have.value', '')
    cy.get('#open-text-area').type('Teste de preenchimento').should('have.value', 'Teste de preenchimento').clear().should('have.value', '')


  })

  it('Envia formulario sem preencher itens obrigtórios e valida mensagem de erro', () => {
    cy.get('.button').should('have.text', 'Enviar').click()
    cy.get('.error').should('be.visible', 'Valide os campos obrigatórios!')
  })
  it('envia o formulário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit({
      firstName: 'Amanda',
      lastName: 'Calixto',
      email: 'amanda@example.com',
      openTextArea: 'Gostei muito do atendimento!'
    })
  })

  it('Localiza botão com cy.contains', () => {
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Pereira da Silva')
    cy.get('#email').type('joao@email.com')
    cy.get('#open-text-area').type('Teste de preenchimento')
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible', 'Teste de formulário')
  })

  it('Preenche o formulário e marca o produto - Mentoria - Value', () => {
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Pereira da Silva')
    cy.get('#email').type('joao@email.com')
    cy.get('select').select('mentoria').should('have.value', 'mentoria')
    cy.get('#open-text-area').type('Teste de preenchimento')
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible', 'Mensagem enviada com sucesso.')


  })

  it('Preenche o formulário e marca o produto - Youtube - texto', () => {
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Pereira da Silva')
    cy.get('#email').type('joao@email.com')
    cy.get('select').select('YouTube').should('have.value', 'youtube')
    cy.get('#open-text-area').type('Teste de preenchimento')
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible', 'Mensagem enviada com sucesso.')


  })

  it('Preenche o formulário e marca o produto - Blog - índice', () => {
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Pereira da Silva')
    cy.get('#email').type('joao@email.com')
    cy.get('select').select(1).should('have.value', 'blog')
    cy.get('#open-text-area').type('Teste de preenchimento')
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible', 'Mensagem enviada com sucesso.')

  })

  it('Preenche o formulário e marca tipo de atendimento - Ajuda', () => {
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Pereira da Silva')
    cy.get('#email').type('joao@email.com')
    cy.get('input[type="radio"][value="ajuda"]').check().should('have.value', 'ajuda')
    cy.get('#open-text-area').type('Teste de preenchimento')
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible', 'Mensagem enviada com sucesso.')


  })

  it('Preenche o formulário e marca tipo de atendimento - Elogio', () => {
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Pereira da Silva')
    cy.get('#email').type('joao@email.com')
    cy.get('input[type="radio"][value="elogio"]').check().should('be.checked', 'ajuda')
    cy.get('#open-text-area').type('Teste de preenchimento')
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible', 'Mensagem enviada com sucesso.')


  })

  it('Marca ambos os checkbox de contato preferencial e desmarca o ultimo', () => {
    /*Minha resolução 
    cy.get('#email-checkbox').check().should('be.checked')
    cy.get('#phone-checkbox').check().should('be.checked')
    cy.get('#phone-checkbox').uncheck().should('not.be.checked')*/
    //resolução do professor
    cy.get('input[type="checkbox"').check().should('be.checked').last().uncheck().should('not.be.checked')
  })

  it('Seleciona arquivo', () => {
    cy.get('input[type="file"]').selectFile('cypress\\fixtures\\example.json').should((input) => {
      expect(input[0].files[0].name).to.equal('example.json')
    })
  })

  it('Seleciona arquivo utilizando o drag-drop', () => {
    cy.get('input[type="file"]').selectFile('cypress\\fixtures\\example.json', { action: 'drag-drop' }).should((input) => {
      expect(input[0].files[0].name).to.equal('example.json')
    })
  })

  it('Seleciona arquivo utilizando alias', () => {
    cy.fixture('example.json').as('simpleFile')
    cy.get('input[type="file"]').selectFile('@simpleFile').should((input) => {
      expect(input[0].files[0].name).to.equal('example.json')
    })
  })

   it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.get('a[href="privacy.html"')
    .should('have.attr', 'target', '_blank')
  })

  it('Acessa a página da política de privacidade removendo o target e então clicando no link', () => {
   cy.get('#privacy a')
    .invoke('removeAttr', 'target')  
    .click()
  })

  




})





