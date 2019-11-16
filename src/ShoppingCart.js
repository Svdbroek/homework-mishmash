class ShoppingCart {
    constructor() {
    this.items = []
    }
    getItems() {return this.items}

    addItem(itemName, quantity, price){
       this.items.push( {
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
          })
    }

    clear(){this.items=[]}

   

    total(){
        return this.items.reduce( (acc, val) => {
            let totalPrice = val.quantity * val.pricePerUnit
            // console.log(val.quantity)
            // console.log(val.pricePerUnit)
            // console.log(totalPrice)
            // console.log (acc)
            acc = acc+ totalPrice
            // console.log(acc)
            return acc},0)
    }
}


module.exports = ShoppingCart