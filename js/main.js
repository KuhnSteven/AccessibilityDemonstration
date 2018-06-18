<<<<<<< HEAD
<<<<<<< HEAD
// Target parts of the DOM
const form = document.querySelector("#checkoutForm");
// Target all internal elements inside form
var formElements = document.getElementById('checkoutForm').elements;

// Variables
// radio buttons
let size = "";
const sizeS = document.getElementById("small");
const sizeM = document.getElementById("medium");
const sizeL = document.getElementById("large");
const sizeXL = document.getElementById("extraLarge");

let color = "";
const colorBlack = document.getElementById("black");
const colorW = document.getElementById("white");
const colorR = document.getElementById("red");
const colorBlue = document.getElementById("blue");

const name = document.getElementById("fullName");
const email = document.getElementById("email");
const add1 = document.getElementById("add1");
const add2 = document.getElementById("add2");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zip = document.getElementById("zip");
const country = document.getElementById("country");

// purchase summary section
const summary = document.getElementById("orderDetails");

let content = "";

function sortSize() {
    if(sizeS.checked == true) {
        size = "small";
    }
    else if(sizeM.checked == true) {
        size = "medium";
    }
    else if (sizeL.checked == true) {
        size = "large";
    }
    else if (sizeXL.checked == true) {
        size = "extra-large";
    }
    else {
        alert("No size selected.");
    }
}

function sortColor() {
    if (colorBlack.checked == true) {
        color = "black";
    }
    else if (colorW.checked == true) {
        color = "white";
    }
    else if (colorR.checked == true) {
        color = "red";
    }
    else if (colorBlue.checked == true) {
        color = "blue";
    }
    else {
        alert("No color selected.");
    }
}

function validateInput() {
    if(name.value == "") {
        alert("No input for name detected.");
    }
    else {
        orderSummary();
    }
    if (email.value == "") {
        alert("No input for email detected.");
    }
    else {
        orderSummary();
    }
    if (add1.value == "") {
        alert("No input for address detected.");
    }
    else {
        orderSummary();
    }
    if (city.value == "") {
        alert("No input for city detected.");
    }
    else {
        orderSummary();
    }
    if (zip.value == "" || isNaN(zip.value) || zip.length < 5 || zip.length > 9) {
        alert("Improper input for zip code. (must be US 5-9 digits)");
    }
    else {
        orderSummary();
    }
}

function orderSummary() {
    let content = "";

    form.style.display = "none";
    summary.style.visibility = "visible";

    content += 
        `<h1>ORDER DETAILS</h1>
        <p>Product Size: ${size}</p>
        <p>Product Color: ${color}</p>
        <p>Customer Name: ${name.value}</p>
        <p>Customer Email: ${email.value}</p>
        <p>Shipping Address 1: ${add1.value}</p>
        <p>Shipping Address 2: ${add2.value}</p>
        <p>City: ${city.value}</p>
        <p>State: ${state.value}</p>
        <p>Zip: ${zip.value}</p>
        <p>Country: ${country.value}</p>`;
        summary.innerHTML = content;
}

form.addEventListener("submit", e => {
    e.preventDefault();
    sortSize();
    sortColor();
    validateInput();
    orderSummary();
});
=======
>>>>>>> 3eb4a4197ed637d2f490164ea7e73ee3ddb96dd0
=======
>>>>>>> 3eb4a4197ed637d2f490164ea7e73ee3ddb96dd0
