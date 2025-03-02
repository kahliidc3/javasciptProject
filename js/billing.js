/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction() {
    const shippingName = document.getElementById('shippingName');
    const shippingZip = document.getElementById('shippingZip');
    const billingName = document.getElementById('billingName');
    const billingZip = document.getElementById('billingZip');
    const sameCheckbox = document.getElementById('same');
    const billingFields = document.getElementById('billingFields');

    // Toggle billing fields visibility and required attributes
    if (sameCheckbox.checked) {
        billingName.value = shippingName.value;
        billingZip.value = shippingZip.value;
        billingFields.style.opacity = '0.7';
        billingName.readOnly = true;
        billingZip.readOnly = true;
    } else {
        billingName.value = '';
        billingZip.value = '';
        billingFields.style.opacity = '1';
        billingName.readOnly = false;
        billingZip.readOnly = false;
    }
}

// Real-time validation
document.addEventListener('DOMContentLoaded', function() {
    const zipInputs = document.querySelectorAll('input[pattern]');
    const form = document.querySelector('form');

    zipInputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.validity.patternMismatch) {
                this.setCustomValidity('Please enter a valid 5-digit zip code');
            } else {
                this.setCustomValidity('');
            }
        });
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (form.checkValidity()) {
            alert('Form submitted successfully!');
        }
    });
});