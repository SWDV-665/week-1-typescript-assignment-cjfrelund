interface groceryItem {
    name: string;
    qty: string;
    category: string
}

class Grocery {
    name: string;
    qty: string;
    category: string;

    constructor(name: string, qty: string, category: string) {
        this.name = name;
        this.qty = qty;
        this.category = category;
    }
}

var groceries: Grocery[] = [
    {"name": "Milk", "qty": "1", "category": "dairy"},
    {"name": "Potatoes", "qty": "3", "category": "produce"},
    {"name": "Celery", "qty": "3", "category": "produce"},
    {"name": "Carrots", "qty": "3", "category": "produce"},
    {"name": "Salmon", "qty": "3", "category": "seafood"},
    {"name": "Collard Greens", "qty": "3", "category": "produce"},
    {"name": "Ginger", "qty": "3", "category": "produce"},
    {"name": "Orange Juice", "qty": "3", "category": "juice"}
]

const groceryListTable = document.getElementById("grocery-list") as HTMLTableElement;

let i;

for (i = 0; i < groceries.length; i++) {
    let groceryItem = groceries[i];
    console.log(groceryItem)
    let newRow = groceryListTable.insertRow(-1);

    let nameCell = newRow.insertCell(0);
    let qtyCell = newRow.insertCell(1);
    let categoryCell = newRow.insertCell(2);
    
    nameCell.innerText = groceryItem["name"];
    qtyCell.innerText = groceryItem["qty"];
    categoryCell.innerText = groceryItem["category"];
}