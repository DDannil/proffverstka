'use strict'

class Product {
    constructor(id, name, description, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

const products = [
    new Product(
        1,
        'Product 1',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        52.00,
    ),
    new Product(
        2,
        'Product 2',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dolorem!',
        98.34,
    ),
    new Product(
        3,
        'Product 3',
        'Lorem ipsum, dolor sit amet consectetur adipisicing.',
        30.68,
    ),
    new Product(
        4,
        'Product 4',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veritatis placeat quae.',
        61.53,
    ),
    new Product(
        5,
        'Product 5',
        'Lorem ipsum dolor sit amet.',
        86.23,
    ),
    new Product(
        6,
        'Product 6',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        76.20,
    ),
]