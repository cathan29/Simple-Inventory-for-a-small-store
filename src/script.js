document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inventory-form');
    const addProductBtn = document.getElementById('add-product-btn');
    const productTypeSelect = document.getElementById('product-type');
    const newProductNameInput = document.getElementById('new-product-name');
    const totalItemsSpan = document.getElementById('total-items');
    const totalCostSpan = document.getElementById('total-cost');
    const averageCostSpan = document.getElementById('average-cost');
    const productBreakdown = document.getElementById('product-breakdown');

    let totalItems = 0;
    let totalCost = 0;
    const productCounts = {};

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const productType = productTypeSelect.value;
        const quantity = parseInt(document.getElementById('quantity').value, 10);
        const cost = parseFloat(document.getElementById('cost').value);

        if (!productType || isNaN(quantity) || isNaN(cost) || quantity <= 0 || cost <= 0) {
            alert('Please fill out all fields with valid values.');
            return;
        }

        // Update totals
        totalItems += quantity;
        totalCost += quantity * cost;

        // Update product counts
        if (!productCounts[productType]) {
            productCounts[productType] = 0;
        }
        productCounts[productType] += quantity;

        // Update the DOM
        totalItemsSpan.textContent = totalItems;
        totalCostSpan.textContent = totalCost.toFixed(2);
        averageCostSpan.textContent = (totalCost / totalItems).toFixed(2);

        // Update product breakdown
        const productListItem = document.getElementById(`product-${productType.toLowerCase()}-count`);
        if (productListItem) {
            productListItem.textContent = productCounts[productType];
        }

        form.reset();
    });

    // Handle adding a new product
    addProductBtn.addEventListener('click', () => {
        const newProductName = newProductNameInput.value.trim();

        if (!newProductName) {
            alert('Please enter a valid product name.');
            return;
        }

        const newOption = document.createElement('option');
        newOption.value = newProductName;
        newOption.textContent = newProductName;
        productTypeSelect.appendChild(newOption);

        const newListItem = document.createElement('li');
        newListItem.innerHTML = `${newProductName}: <span id="product-${newProductName.toLowerCase()}-count">0</span> items`;
        productBreakdown.appendChild(newListItem);

        alert(`New product "${newProductName}" added successfully!`);
        newProductNameInput.value = '';
    });
});