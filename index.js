let inventory = [];
let name;
let i = 1;
while(i>=1){
    name = prompt("Enter a name of a product or 0 to exit: ");
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


console.log(inventory);


// Function to add a Product to the inventory by Mariam Mussa : mariamkilangi@outlook.com



// Function to remove product by Nakayiza Kevina : nakayizakevina@outlook.com



// Function to update stock by Nancy Ndungu : nyokabi5991@outlook.com




// Function to generate report by Olaleye Oluwatomide Paulina : paulinaarike@outlook.com




// Function to search products by Amos Gloria : amoskesegloria@outlook.com
