/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
        * **Login on application with a user**.
        *
        * @param email string - The e-mail of the user
        * @param password string - The password of the user
        *
        * @example cy.login('user@email.com', 'pwd123')
        */
        login(email: string, password: string): Cypress.Chainable<null>

        /**
         * **Get the authorization token of a user**.
         *
         * @param admin object - The object with boolean parameter for administrator (true or false)
         *
         * @example cy.getToken({ administrador: true }) // Get the admin user authorization token
         * @example cy.getToken({ administrador: false }) // Get the non-admin user authorization token
         */
        getToken(admin: { administrador?: boolean }): Cypress.Chainable<null>

        /**
         * **Get all users**.
         *
         * @example cy.getAllUsers()
         */
        getAllUsers(): Cypress.Chainable<null>

        /**
         * **Get a specific user**.
         * 
         * @param id string - The user ID
         * 
         * @example cy.getUserById('0uxuPY0cbmQhpEz1')
         */
        getUserById(id: string): Cypress.Chainable<null>

        /**
         * **Create a user.**
         * 
         * @param payload object - The payload of request body with user infos
         *
         * @example cy.postUser({
                        nome: 'Scott Henderson',
                        email: 'scott@email.com',
                        password: 'pwd123',
                        administrador: true
                    })
         */
        postUser(payload: object): Cypress.Chainable<null>

        /**
         * **Delete a user**.
         *
         * @param id string - The user ID
         *
         * @example cy.deleteUser('0uxuPY0cbmQhpEz1')
         */
        deleteUser(id: string): Cypress.Chainable<undefined>

        /**
         * **Edit a user**.
         *
         * @param id string - The user ID
         * @param payload object - The payload of request body with new user infos
         *
         * @example cy.putUser('0uxuPY0cbmQhpEz1', {
                        nome: 'Mike Stern',
                        email: 'mike@email.com',
                        password: 'pwd123',
                        administrador: false
                    })
         */
        putUser(id: string, payload: object): Cypress.Chainable<undefined>

        /**
         * **Get all products**.
         *
         * @example cy.getAllProducts()
         */
        getAllProducts(): Cypress.Chainable<null>

        /**
         * **Get a specific product**.
         * 
         * @param id string - The user ID
         * 
         * @example cy.getProductById('BeeJh5lz3k6kSIzA')
         */
        getProductById(id: string): Cypress.Chainable<null>

        /**
         * **Create a product.**
         * 
         * @param token string - The authorization token of a user
         * @param payload object - The payload of request body with product infos
         *
         * @example cy.postProduct('Bearer eyJhbGciOiJIUzI1N', {
                        nome: 'Razer Deathadder V2 Chroma',
                        preco: 549.99,
                        descricao: 'Mouse Gamer',
                        quantidade: 120
                    })
         */
        postProduct(token: string, payload: object): Cypress.Chainable<null>

        /**
         * **Delete a product**.
         * 
         * @param token string - The authorization token of a user
         * @param id string - The product ID
         *
         * @example cy.deleteProduct('Bearer eyJhbGciOiJIUzI1N', 'BeeJh5lz3k6kSIzA')
         */
        deleteProduct(token: string, id: string): Cypress.Chainable<undefined>

        /**
         * **Edit a product**.
         * 
         * @param token string - The authorization token of a user
         * @param id string - The product ID
         * @param payload object - The payload of request body with new user infos
         *
         * @example cy.putProduct('Bearer eyJhbGciOiJIUzI1N', 'BeeJh5lz3k6kSIzA', {
                        nome: 'Razer Deathadder V2 Chroma',
                        preco: 549.99,
                        descricao: 'Mouse Gamer',
                        quantidade: 120
                    })
         */
        putProduct(token: string, id: string, payload: object): Cypress.Chainable<undefined>

        /**
        * **Create a cart for a user.**
        *
        * @param token string - The authorization token of a user
        * @param payload object - The payload of request body with cart infos
        *
        * @example cy.postCart('Bearer eyJhbGciOiJIUzI1N', {
                        "produtos": [
                            {
                            "idProduto": "BeeJh5lz3k6kSIzA",
                            "quantidade": 1
                            }
                        ]
                    })
        */
        postCart(token: string, payload: object): Cypress.Chainable<null>
    }
}