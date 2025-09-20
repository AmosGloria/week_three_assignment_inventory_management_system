
// Function to add a Product to the inventory by Mariam Mussa : mariamkilangi@outlook.com
let inventory = [];
let name;
let i = 1;
while(i >= 1){
    name = prompt("Enter name of a product or 0 to exit: ");
    if (name=="0"){
        break;
    }
    let price = Number(prompt("Enter the price of the product:"));
    let qty = parseInt(prompt("Enter the quantity of the product:"));
    
    addProduct(name,price,qty);
    i++;
}

function addProduct(name,price,qty){
    let product = {
        id:inventory.length + 1,
        name: name,
        price: price,
        quantity: qty
    };
     inventory.push(product);
}

// Function to remove product by Nakayiza Kevina : nakayizakevina@outlook.com

function removeProduct(productName){
    const index = inventory.findIndex(item => item.name === productName)
    if (index !== -1){
        inventory.splice(index, 1);
    } else {
        console.log("Product not found")
    }
}


removeProduct("Bread");


// Function to update stock by Nancy Ndungu : nyokabi5991@outlook.com
function updateStock(id, change) {
    const product = inventory.find(item => item.id === id);
    if (product) {
        product.quantity += change;
        console.log(`${product.name} updated. New quantity: ${product.quantity}`);
    } else {
        console.log("Product not found");
    }
}
addProduct("milk", 40, 10);
addProduct("Bread", 50, 20);  
updateStock(1, 67);
updateStock(2, 9);

// Function to generate report by Olaleye Oluwatomide Paulina : paulinaarike@outlook.com




// Function to search products by Amos Gloria : amoskesegloria@outlook.com
