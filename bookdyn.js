{// Get references to the select element and the dynamic content div
const userDes = document.getElementById('userDes');
const totalAmount = document.getElementById('totalAmount');

// Define a function to update the dynamic content
function updateDynamicContent() {
    // Get the selected option's value
    const selectedOption = userDes.value;

    // Define the content for each option
    const optionContent = {
        Berdiansk: "EURO 500.00",
        option2: "You selected Option 2.",
        option3: "You selected Option 3."
    };

    // Update the dynamic content based on the selected option
    totalAmount.textContent = optionContent[selectedOption];
}

// Add an event listener to the select element
totalAmount.addEventListener('change', updateDynamicContent);

// Initialize the dynamic content when the page loads
updateDynamicContent();}





// New user Des


function userDesValue(){

    const userDes = document.getElementById("userDes").value;


    const userDesPrice = {
        "Alchevsk": "EURO 580",
        "Berdiansk": "EURO 440",
        "bilaTserkva": "EURO 420",
        "Belarus": "EURO 600",
        "Brovary": "EURO 425",
        "Cherkasy": "EURO 540",
        "Chernihiv": "EURO 490",
        "Cherkasy": "EURO 450",
        "Chernivtsi": "EURO 550",
        "Chervonohrad": "EURO 610",
        "Dnipro": "EURO 410",
        "Donetsk": "EURO 413",
        "Dovzhansk": "EURO 496",
        "Drohobych": "EURO 435",
        "Horlivka": "EURO 520",
        "Ivano-Frankivsk": "EURO 560",
        "Kamianets-Podilskyi": "EURO 590",
        "Kerch": "EURO 490",
        "Kamianske": "EURO 505",
        "Kharkiv": "EURO 512",
        "Kherson": "EURO 484",
        "Khmelnytskyi": "EURO 444",
        "Khrustalnyi": "EURO 496",
        "Konotop": "EURO 543",
        "Kramatorsk": "EURO 507",
        "Kremenchuk": "EURO 404",
        "Kropyvnytskyi": "EURO 503",
        "Kryvyi-Rih": "EURO 597",
        "Kyiv": "EURO 460",
        "Luhansk": "EURO 592",
        "Lutsk": "EURO 543",
        "Lviv": "EURO 587",
        "Lysychansk": "EURO 498",
        "Makiivka": "EURO 442",
        "Mariupol": "EURO 497",
        "Melitopol": "EURO 455",
        "Mukacheve": "EURO 554",
        "Moldova": "EURO 600",
        "Mykolaiv": "EURO 399",
        "Nikopol": "EURO 603",
        "Odesa": "EURO 605",
        "Pavlohrad": "EURO 594",
        "Poland": "EURO 700",
        "Poltava": "EURO 539",
        "Romania": "EURO 650",
        "Rivne": "EURO 598",
        "Sevastopol": "EURO 599",
        "Sievierodonetsk": "EURO 449",
        "Simferopol": "EURO 486",
        "Sloviansk": "EURO 533",
        "Sumy": "EURO 477",
        "Ternopil": "EURO 537",
        "Uman": "EURO 459",
        "Uzhhorod": "EURO 439",
        "Vinnytsia": "EURO 472",
        "Yevpatoriia": "EURO 494",
        "Zaporizhzhia": "EURO 455",
        "Zhytomyr": "EURO 522"
        
    }

    document.getElementById("totalAmount").textContent =  userDesPrice[userDes];
}




// next form dynamics


function focusNextInput(currentFormId, nextFormId) {
    // Get the current form and next form elements
    var currentForm = document.getElementById(currentFormId);
    var nextForm = document.getElementById(nextFormId);

    // Get the input elements of the current and next forms
    var currentInput = currentForm.querySelector('input');
    var nextInput = nextForm.querySelector('input');

    // Focus on the next input element
    nextInput.focus();
  }