export default class Product {
    #id
    #name
    #preco

    constructor(id, name, preco) {
        this.#id = id
        this.#name = name
        this.#preco = preco
    }

    get id() {
        return this.#id
    }
    get name() {
        return this.#name
    }
    get preco() {
        return this.#preco
    }
}