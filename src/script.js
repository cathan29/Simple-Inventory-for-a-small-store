// document.addEventListener('DOMContentLoaded', () => {
//     // Initialize counters and accumulators
//     let totalItems = 0;
//     let totalCost = 0;
//     let productACount = 0;
//     let productBCount = 0;
//     let productCCount = 0;

//     // Get references to form and summary elements
//     const form = document.getElementById('inventory-form');
//     const productTypeSelect = document.getElementById('product-type');
//     const quantityInput = document.getElementById('quantity');
//     const costInput = document.getElementById('cost');
//     const totalItemsSpan = document.getElementById('total-items');
//     const totalCostSpan = document.getElementById('total-cost');
//     const averageCostSpan = document.getElementById('average-cost');
//     const productACountSpan = document.getElementById('product-a-count');
//     const productBCountSpan = document.getElementById('product-b-count');
//     const productCCountSpan = document.getElementById('product-c-count');

//     // Handle form submission
//     form.addEventListener('submit', (event) => {
//         event.preventDefault(); // Prevent form from refreshing the page

//         // Get user input
//         const productType = productTypeSelect.value;
//         const quantity = parseInt(quantityInput.value, 10);
//         const cost = parseFloat(costInput.value);

//         // Validate input
//         if (!productType || isNaN(quantity) || isNaN(cost) || quantity <= 0 || cost <= 0) {
//             alert('Please enter valid inputs for all fields.');
//             return;
//         }

//         // Update counters and accumulators
//         totalItems += quantity;
//         totalCost += quantity * cost;

//         if (productType === 'A') {
//             productACount += quantity;
//         } else if (productType === 'B') {
//             productBCount += quantity;
//         } else if (productType === 'C') {
//             productCCount += quantity;
//         }

//         // Update the summary in the DOM
//         totalItemsSpan.textContent = totalItems;
//         totalCostSpan.textContent = totalCost.toFixed(2);
//         averageCostSpan.textContent = (totalCost / totalItems).toFixed(2);
//         productACountSpan.textContent = productACount;
//         productBCountSpan.textContent = productBCount;
//         productCCountSpan.textContent = productCCount;

//         // Clear the form inputs
//         form.reset();
//         productTypeSelect.value = ''; // Reset the dropdown
//     });
// });