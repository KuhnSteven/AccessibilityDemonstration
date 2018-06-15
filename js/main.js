// form variable instantiation
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

// target all internal elements inside form(17) & the form itself (18)
var formElements = document.getElementById('checkoutForm').elements;
var form = document.querySelector("#checkoutForm");

form.addEventListener("submit", e => {
    e.preventDefault();
    return formValidation();
})

function formValidation() {
    // radio buttons
    var Size = formElements['size'].value;
    var Color = formElements['color'].value;

    // select lists
    var State = formElements['state'].value;
    var Country = formElements['country'].value;

    // input fields
    
}