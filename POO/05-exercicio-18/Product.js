class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(quantity) {
        this.inStock += quantity
    }
    calculateDiscount(percentage) {
        let discount = (percentage / 100) * this.price;
        let total = this.price - discount;
        this.price = total
    return this.price;
    }
}

const computer = new Product("Computador", "Compuador de última geração, top de linha", 8000)
computer.addToStock(10)
console.log(computer);

computer.calculateDiscount(50)
console.log(computer);


const cellphone = new Product("Celular", "Celular de última geração", 3500)
cellphone.addToStock(50)
console.log(cellphone)


cellphone.calculateDiscount(20)
console.log(cellphone)

