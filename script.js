
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
   5. CONTACT FORM
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
   6. ORDER ENQUIRY FORM
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
   7. CONSOLE MESSAGES
======================================== */

console.log("Shop Name:", shopName);
console.log("Current Year:", currentYear);
console.log("Running Total:", runningTotal);
