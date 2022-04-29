Cypress.Commands.add('postCart', (token, payload) => {
  cy.api({
    method: 'POST',
    url: 'carrinhos',
    headers: { Authorization: token },
    body: payload,
    failOnStatusCode: false
  }).then(response => {
    return response
  })
})
