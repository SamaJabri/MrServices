function getIp(callback) {
    fetch('https://ipinfo.io/json?token=897b2e971149af', { headers: { 'Accept': 'application/json' }})
    .then((resp) => resp.json())
    .catch(() => {
        return {
            country: 'uk',
        };
    })
    .then((resp) => callback(resp.country));
}

const phoneInputField = document.querySelector("#number");
const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "auto",
    geoIpLookup: getIp,
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

let isValid = false;
function process(event)  {
    event.preventDefault();

    isValid = !!phoneInput.isValidNumber();

    return isValid;
}
