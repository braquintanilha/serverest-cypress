describe('Products tests - GET method', () => {
  const product = require('../../fixtures/products')

  it('get all products', () => {
    cy.getAllProducts().should(response => {
      expect(response.status).to.be.equal(200)
      expect(response.body.quantidade).to.be.greaterThan(0)
    })
  })

  it('get a product by id', () => {
    cy.getProductById(product.mouse._id).should(response => {
      expect(response.status).to.be.equal(200)
      expect(response.body.nome).to.be.equal(product.mouse.nome)
      expect(response.body.preco).to.be.equal(product.mouse.preco)
      expect(response.body.descricao).to.be.equal(product.mouse.descricao)
    })
  })

  it('validate the get product response schema', () => {
    const productsSchema = require('../../support/contracts/products.contract')

    cy.getAllProducts().should(response => {
      return productsSchema.validateAsync(response.body)
    })
  })
})
