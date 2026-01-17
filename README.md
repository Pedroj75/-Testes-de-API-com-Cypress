# Desafio Técnico – Testes de API com Cypress

Este projeto faz parte do processo seletivo para a vaga de Analista de testes da ESIG Group.  
O objetivo foi realizar testes automatizados de API utilizando o framework Cypress, com base em uma API pública (DummyJSON).

---

## Descrição do Desafio

O desafio consistiu em implementar testes automatizados de API que realizassem múltiplas chamadas REST, utilizando os métodos GET, POST, PUT e DELETE, com validações (asserts) sobre os dados retornados.

Também foi solicitado:
- Tratamento de autenticação
- Geração de token para uso na API
- Execução de pelo menos 10 chamadas de API
- Geração de relatório de testes ao final da execução

---

## Tecnologias Utilizadas

- Node.js
- Cypress
- Mochawesome (geração de relatório de testes)

---

## Estrutura do Projeto

prova_esig_api/
├── cypress/
│   ├── e2e/
│   │   └── esig_api.cy.js
│   ├── reports/
│   │   └── mochawesome.html
│   └── support/
│       └── e2e.js
├── cypress.config.js
├── package.json
├── DummyJSON.postman_collection.json
└── README.md

---

## Como executar o projeto

1. Clone o repositório:
git clone https://gitlab.com/seu-usuario/prova_esig_api.git
cd prova_esig_api

2. Instale as dependências:
npm install

3. Execute os testes em modo headless:
npx cypress run

Após a execução, o relatório será gerado automaticamente.

---

## Testes Implementados

Foram implementados 11 testes automatizados, cobrindo os seguintes cenários:

1. Criação de novo usuário (POST /users/add)
2. Listagem de usuários (GET /users)
3. Busca de usuário por ID (GET /users/:id)
4. Busca de usuários com limite (GET /users?limit=5)
5. Busca de usuários com filtro (GET /users/search)
6. Criação de novo post (POST /posts/add)
7. Exclusão de post (DELETE /posts/:id)
8. Listagem de produtos (GET /products)
9. Busca de produto por ID (GET /products/:id)
10. Busca de produto por filtro (GET /products/search)
11. Autenticação de usuário e obtenção de token (POST /auth/login)

Todos os testes realizam validações de status code e estrutura dos dados retornados.

---

## Autenticação

A autenticação é tratada através do endpoint POST /auth/login.  
O teste simula o login de um usuário válido e valida o retorno da API, incluindo a resposta de sucesso.

Esse teste garante a cobertura do requisito de autenticação solicitado no desafio.

---

## Relatório de Testes

Ao final da execução dos testes, é gerado automaticamente um relatório utilizando o Mochawesome.

O relatório pode ser encontrado em:
cypress/reports/mochawesome.html

Basta abrir esse arquivo no navegador para visualizar os resultados detalhados da execução.

---

## Autor

Pedro Alcântara
