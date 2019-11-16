class ShoppingCart {

    constructor() {
        this.items = []
    }
    
    getItems() {
        return this.items
    }

    addItem(name,quantity, pricePerUnit) {
        this.items.push({name,quantity, pricePerUnit})
    }
    clear() {
        this.items = []
    }
    total() {
        let sum = 0
        for(let i = 0; i < this.items.length; i++) {
            sum += this.items[i].quantity * this.items[i].pricePerUnit
        }
        return sum
    }
}

module.exports = ShoppingCart