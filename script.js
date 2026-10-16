
/* ========================================
   1. SHOP VARIABLES
======================================== */

const shopName = "Hanelyn Timepieces";
const currentYear = new Date().getFullYear();

let runningTotal = 0;


/* ========================================
   2. DISPLAY SHOP NAME
======================================== */

const shopNameElement = document.getElementById("shopName");

if (shopNameElement) {
    shopNameElement.textContent = shopName;
}


/* ========================================
   3. DYNAMIC COPYRIGHT
======================================== */

const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent =
        `© ${currentYear} ${shopName}. Created by Hanelyn Gontiñas.`;
}


/* ========================================
   4. PRODUCT CALCULATION
======================================== */

const productCards = document.querySelectorAll(".product-card");

productCards.forEach(function (card) {
    const price = Number(card.dataset.price);
    runningTotal += price;
});

const productCountElement = document.getElementById("productCount");

if (productCountElement) {
    productCountElement.textContent = productCards.length;
}

const productTotalElement = document.getElementById("productTotal");

if (productTotalElement) {
    productTotalElement.textContent =
        "Combined price of all watches: ₱" +
        runningTotal.toLocaleString("en-PH");
}


/* ========================================
   5. STOCK STATUS DECISION
======================================== */

// Change this number to test the stock messages.
const stockCount = 7;

let stockStatus;

if (stockCount > 10) {
    stockStatus = "In stock";
} else if (stockCount >= 1) {
    stockStatus = "Only a few left";
} else {
    stockStatus = "Sold out";
}

const stockCountElement = document.getElementById("stockCount");
const stockStatusElement = document.getElementById("stockStatus");

if (stockCountElement) {
    stockCountElement.textContent = stockCount;
}

if (stockStatusElement) {
    stockStatusElement.textContent = stockStatus;
}


/* ========================================
   6. FREE DELIVERY CHECK
======================================== */

// Change these values to test the delivery conditions.
const orderTotal = 1500;
const isMember = true;

// Both conditions must be true to qualify for free delivery.
const qualifiesForFreeDelivery =
    orderTotal >= 1000 && isMember === true;

// Ternary operator chooses the delivery fee.
const deliveryFee = qualifiesForFreeDelivery ? 0 : 150;

// Calculate the final total.
const finalTotal = orderTotal + deliveryFee;

const orderTotalElement = document.getElementById("orderTotal");
const memberStatusElement = document.getElementById("memberStatus");
const deliveryFeeElement = document.getElementById("deliveryFee");
const finalTotalElement = document.getElementById("finalTotal");

if (orderTotalElement) {
    orderTotalElement.textContent =
        "₱" + orderTotal.toLocaleString("en-PH");
}

if (memberStatusElement) {
    memberStatusElement.textContent =
        isMember === true ? "Yes" : "No";
}

if (deliveryFeeElement) {
    deliveryFeeElement.textContent =
        "₱" + deliveryFee.toLocaleString("en-PH");
}

if (finalTotalElement) {
    finalTotalElement.textContent =
        "₱" + finalTotal.toLocaleString("en-PH");
}


/* ========================================
   7. SHOP OPEN OR CLOSED
======================================== */

// Change to false to display "Closed today".
const isShopOpen = true;

const shopStatus = isShopOpen ? "Open today" : "Closed today";
const shopStatusElement = document.getElementById("shopStatus");

if (shopStatusElement) {
    shopStatusElement.textContent = shopStatus;
}


/* ========================================
   8. CONTACT FORM
======================================== */

const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

if (contactForm && successMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        contactForm.hidden = true;
        successMessage.hidden = false;
    });
}


/* ========================================
   9. ORDER ENQUIRY FORM
======================================== */

const orderEnquiryForm =
    document.getElementById("orderEnquiryForm");

const orderSuccessMessage =
    document.getElementById("orderSuccessMessage");

if (orderEnquiryForm && orderSuccessMessage) {
    orderEnquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        orderEnquiryForm.hidden = true;
        orderSuccessMessage.hidden = false;
    });
}


/* ========================================
   10. CONSOLE MESSAGES
======================================== */

console.log("Shop Name:", shopName);
console.log("Current Year:", currentYear);
console.log("Running Total:", runningTotal);
console.log("Stock Status:", stockStatus);
console.log("Order Total:", orderTotal);
console.log("Delivery Fee:", deliveryFee);
console.log("Final Total:", finalTotal);
console.log("Shop Status:", shopStatus);
