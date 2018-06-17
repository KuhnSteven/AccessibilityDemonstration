// IF FIELDSETS ARE ADDED, USE THEM IN PLACE OF FORM ID
// target all internal elements inside form & the form itself
var formElements = document.getElementById('checkoutForm').elements;
var form = document.querySelector("#checkoutForm");
var output = document.querySelector("#formOutput");

// form variable instantiation
var validForm = true;
let size = "S";
let color = 1;
let name = "";
let email = "";
let address = "";
let address2 = "";
let city = "";
let state = "";
let zip = 0;
let country = "";

// output content
let content = "";

form.addEventListener("submit", e => {
    e.preventDefault();
    console.log('action: form submit');
    return formValidation();
})

// read in all information off of the form
function formBuild() {
    // radio buttons
    size = formElements['size'].value;
    color = formElements['color'].value;

    // select lists
    state = formElements['state'].value;
    country = formElements['country'].value;

    // input fields
    name = form.querySelector("#fullName").value;
    email = form.querySelector("#email").value;
    address = form.querySelector("#add1").value;
    address2 = form.querySelector("#add2").value;
    city = form.querySelector("#city").value;
    zip = form.querySelector("#zip").value;

    return formValidation();
}

// check all inputs to be proper
function formValidation() {
    // if size is none of the options...
    if (size != "SML" && size != "MED" && size != "LRG" && size != "X-LRG") {
        alert("You must select a size before you continue.");
        validForm = false;
    }
    else {
        console.log("valid size.");
    }
    // if color is none of the options...
    if (color != "Red" && color != "White" && color != "Ref" && color != "Blue") {
        alert("You must select a color before you continue.");
        validForm = false;
    }
    else {
        console.log("valid color.");
    }
    // if name is default "" or is missing a space for last name
    if (name == "" || !name.includes(" ")) {
        alert("You must enter your full-name before you continue.");
        validForm = false;
    }
    else {
        console.log("valid name.");
    }
    // if eMail is default "", or does not have an @ after the 4th space, or does not have specifically ".com" after the 7th space...
    if (email == "" || !email.includes("@", 3) || !email.includes(".com", 6)) {
        alert("You must enter a valid e-mail address before you continue. (.com only)");
        validForm = false;
    }
    else {
        console.log("valid eMail.");
    }
    // if address is default ""...
    if (add1 == "" || add1) {
        alert("You must enter a valid address before you continue.");
        validForm = false;
    }
    else {
        console.log("valid address.");
    }
    // if zip is default value or larger than 5 digits...
    if (zip == 0 || zip > 99999) {
        alert("You must enter a proper zip-code before you continue.");
        validForm = false;
    }
    else {
        console.log("valid zip-code.");
    }

    return formOutput();
}

function formOutput() {
    if(!validForm) {
        alert("Something is wrong with the information you've provided. Please double check input.");
        console.log("Form build error");
    }
    else {
        // build the output info
        content = `<h1>ORDER DETAILS</h1><p><br>Product Size: ${size}<br>Product Color: ${color}<br><br>Customer Name: ${name}<br>Customer Email: ${email}<br>Shipping Address 1: ${sAddress}<br>Shipping Address 2: ${sAddress2}<br>City: ${city}<br>State: ${state}<br>Zip: ${zip}<br>Country: ${country}</p>`;
        // display to page
        output.innerHTML(content);
    }
}