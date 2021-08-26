describe('Products tests - GET method', () => {
  const product = require('../../fixtures/products')

  it('get all products', () => {
    const schema = require('../../support/schemas/products/getProducts.schema')

    cy.getAllProducts().should(response => {
      expect(response.status).to.be.equal(200)
      expect(response.body.quantidade).to.be.greaterThan(0)
      return schema.validateAsync(response.body)
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
})
