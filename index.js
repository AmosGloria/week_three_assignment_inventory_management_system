
// Function to add a Product to the inventory by Mariam Mussa : mariamkilangi@outlook.com
let inventory = [];

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
 

// Function to generate report by Olaleye Oluwatomide Paulina : paulinaarike@outlook.com
function generateStock() {
    let totalItemsValue = 0;
    let lowStockItems = [];
    for (let index = 0; index < inventory.length; index++) {
        let productValue = inventory[index].price * inventory[index].quantity;
        totalItemsValue += productValue;
        if (inventory[index].quantity <= 10) {
            lowStockItems.push(inventory[index])
        }
    }
    let inventoryReport = {
        "Total Products": inventory.length, 
        "Total Value of Items": totalItemsValue,
        "Low Stock Items": lowStockItems,
        "All Products": inventory
    };
    console.log(inventoryReport);
}


// Function to search products by Amos Gloria : amoskesegloria@outlook.com

function searchProduct(productName) {
    const searchResults = inventory.filter(item =>
         item.name.toLowerCase().includes(productName.toLowerCase()));

    if (searchResults.length > 0) {
        console.log("Products found:");
        searchResults.forEach(product => {
            console.log(`Product ID: ${product.id}, 
                        Name: ${product.name},
                        Price: ${product.price},
                        Quantity: ${product.quantity}`);
        });
    } else {
        console.log("No products found with that name.");
    }
}


addProduct('ice Cream', 8000, 2);
addProduct("milk", 40, 10);
addProduct("Bread", 50, 20); 

removeProduct("Bread");
removeProduct('ice Cream')

updateStock(2, -19);
updateStock(2, 20)

searchProduct("bread"); 
searchProduct("milk");  
searchProduct("apple"); 

generateStock();