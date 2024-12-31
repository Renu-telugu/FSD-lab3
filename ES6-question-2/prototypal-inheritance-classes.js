// Base Product class
class Product {
    constructor(name, category, price) {
      this.name = name;
      this.category = category;
      this.price = price;
    }
  
    show() {
      return `${this.name} (${this.category}) costs ₹${this.price}`;
    }
}

class Electronics extends Product {
    constructor(name, price, warranty) {
        super(name, "Electronics", price);
        this.warranty = warranty;
    }

    show() {
        return `${super.show()} with a warranty of ${this.warranty}`;
    }
}

class Fashion extends Product {
    constructor(name, price, size) {
        super(name, "Fashion", price);
        this.size = size;
    }

    show() {
        return `${super.show()} available in size ${this.size}`;
    }
}

const phone = new Electronics("Phone", 30000, "1 year");
const shirt = new Fashion("Shirt", 800, "Large");

console.log(phone.show());
console.log(shirt.show());  