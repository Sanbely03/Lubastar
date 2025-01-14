// script.js
const products = [
    {
        id: 1,
        name: "Product 1",
        description: "This is product 1",
        price: 10.99,
        image: "product1.jpg"
    },
    {
        id: 2,
        name: "Product 2",
        description: "This is product 2",
        price: 9.99,
        image: "product2.jpg"
    },
];

const productList = document.querySelector("ul");

products.forEach(product => {
    const productHTML = `
        <li class="product">
            <img src="${product.image}" alt="${product.name}">
alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button>Add to Cart</button>
        </li>
    `;
    productList.insertAdjacentHTML("beforeend", productHTML);
});
