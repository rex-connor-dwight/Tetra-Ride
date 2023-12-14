function copyToClipboard(inputId) {
    /* Get the text field */
    var addressField = document.getElementById(inputId);

    /* Select the text field */
    addressField.select();
    addressField.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field to the clipboard */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Wallet address copied to clipboard: " + addressField.value);
}