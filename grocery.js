var Grocery = /** @class */ (function () {
    function Grocery(name, qty, category) {
        this.name = name;
        this.qty = qty;
        this.category = category;
    }
    return Grocery;
}());
var groceries = [
    { "name": "Milk", "qty": "1", "category": "dairy" },
    { "name": "Potatoes", "qty": "3", "category": "produce" },
    { "name": "Celery", "qty": "3", "category": "produce" },
    { "name": "Carrots", "qty": "3", "category": "produce" },
    { "name": "Salmon", "qty": "3", "category": "seafood" },
    { "name": "Collard Greens", "qty": "3", "category": "produce" },
    { "name": "Ginger", "qty": "3", "category": "produce" },
    { "name": "Orange Juice", "qty": "3", "category": "juice" }
];
var groceryListTable = document.getElementById("grocery-list");
var i;
for (i = 0; i < groceries.length; i++) {
    var groceryItem = groceries[i];
    console.log(groceryItem);
    var newRow = groceryListTable.insertRow(-1);
    var nameCell = newRow.insertCell(0);
    var qtyCell = newRow.insertCell(1);
    var categoryCell = newRow.insertCell(2);
    nameCell.innerText = groceryItem["name"];
    qtyCell.innerText = groceryItem["qty"];
    categoryCell.innerText = groceryItem["category"];
}
