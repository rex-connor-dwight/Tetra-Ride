const userPin = document.getElementById("userPin");
const from = document.getElementById("from");

const userDes = document.getElementById("userDes");
const torh = document.getElementById("torh");

const userDate = document.getElementById("userDate");
const nDate = document.getElementById("nDate");


const userName = document.getElementById("userName");
const nName = document.getElementById("nName");

const userEmail = document.getElementById("userEmail");
const nEmail = document.getElementById("nEmail");

const userAddress = document.getElementById("userAddress");
const nAddress = document.getElementById("nAddress");


// total
const totalAmount =  document.getElementById("totalAmount");









userPin.addEventListener("input", function () {
from.textContent = userPin.value;
});

userDes.addEventListener("input", function () {
torh.textContent = userDes.value;
});  

userDate.addEventListener("input", function () {
nDate.textContent = userDate.value;
}); 


userName.addEventListener("input", function () {
nName.textContent = userName.value;
}); 

userEmail.addEventListener("input", function () {
nEmail.textContent = userEmail.value;
}); 

userAddress.addEventListener("input", function () {
nAddress.textContent = userAddress.value;
});


// JavaScript to show and hide the popup
const showPopupButton = document.getElementById('showPopupButton');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('closePopupButton');

showPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable scrolling
});

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
});


 // Function to check if all inputs are filled
 function checkInputs() {
    if (userPin.value.trim() !== '' && userDes.value.trim() !== '' && userDate.value.trim() !== '') {
        showPopupButton.removeAttribute('disabled');
    } else {
        showPopupButton.setAttribute('disabled', 'true');
    }
}
 // Add event listeners to the input fields to check for changes
 userPin.addEventListener('input', checkInputs);
 userDes.addEventListener('input', checkInputs);
 userDate.addEventListener('input', checkInputs);


 // JavaScript to show and hide the paymenOption
const checkOut = document.getElementById('checkOut');
const paymentOption = document.getElementById('paymentOption');
//const closePopupButton = document.getElementById('closePopupButton');

checkOut.addEventListener('click', () => {
    paymentOption.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable scrolling
});

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
});

//PayPal popup
const showPayPal = document.getElementById('showPayPal');
const payPal = document.getElementById('payPal');
const closePayPal = document.getElementById('closePayPal');

showPayPal.addEventListener('click', () => {
    payPal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable scrolling
});

closePayPal.addEventListener('click', () => {
    payPal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
});


//applePay popup
const showApplePay = document.getElementById('showApplePay');
const applePay = document.getElementById('applePay');
const closeApplePay = document.getElementById('closeApplePay');

showApplePay.addEventListener('click', () => {
    applePay.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable scrolling
});

closeApplePay.addEventListener('click', () => {
    applePay.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
});


//cardPay popup
const showCardPay = document.getElementById('showCardPay');
const cardPay = document.getElementById('cardPay');

showCardPay.addEventListener('click', () => {
    cardPay.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable scrolling
});


//cryptoPay popup
const showCryptoPay = document.getElementById('showCryptoPay');
const cryptoPay = document.getElementById('cryptoPay');

showCryptoPay.addEventListener('click', () => {
    cryptoPay.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable scrolling
});









