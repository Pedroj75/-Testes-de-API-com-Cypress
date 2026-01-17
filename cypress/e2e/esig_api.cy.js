describe('Desafio Técnico - Testes de API com Cypress', () => {
  it('criar novo usuário', () => {
    cy.request('POST', 'https://dummyjson.com/users/add', {
      firstName: 'Pedro',
      lastName: 'Alcântara',
      age: 30
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('id')
    })
  })

  it('listar todos os usuários', () => {
    cy.request('GET', 'https://dummyjson.com/users').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('users')
    })
  })

  it('buscar usuário por ID', () => {
    cy.request('GET', 'https://dummyjson.com/users/1')
      .its('status').should('eq', 200)
  })

  it('buscar usuários com limite', () => {
    cy.request('GET', 'https://dummyjson.com/users?limit=5')
      .its('body.users.length').should('eq', 5)
  })

  it('buscar usuários com filtro', () => {
    cy.request('GET', 'https://dummyjson.com/users/search?q=Terry')
      .its('status').should('eq', 200)
  })

  it('criar novo post', () => {
    cy.request('POST', 'https://dummyjson.com/posts/add', {
      title: 'Post de teste QA',
      userId: 5
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('id')
    })
  })

  it('deletar post', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://dummyjson.com/posts/1',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 404])
    })
  })

  it('listar produtos', () => {
    cy.request('GET', 'https://dummyjson.com/products').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('products')
    })
  })

  it('buscar produto por ID', () => {
    cy.request('GET', 'https://dummyjson.com/products/1')
      .its('status').should('eq', 200)
  })

  it('buscar produto com filtro', () => {
    cy.request('GET', 'https://dummyjson.com/products/search?q=phone')
      .its('status').should('eq', 200)
  })

  // 11. Autenticação 
  it('realizar login com usuário válido', () => {
    cy.request({
      method: 'POST',
      url: 'https://dummyjson.com/auth/login',
      body: {
      username: "emilys",
      password: "emilyspass",
      expiresInMins: 60
  },
  failOnStatusCode: false
}).then((response) => {
  expect(response.status).to.eq(200)
  expect(response.body).to.have.property('accessToken')
  expect(response.body).to.have.property('refreshToken')
})

  })
})
it('atualizar usuário (PUT)', () => {
  cy.request('PUT', 'https://dummyjson.com/users/1', {
    firstName: 'Pedro Atualizado'
  }).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body).to.have.property('firstName', 'Pedro Atualizado')
  })
})
