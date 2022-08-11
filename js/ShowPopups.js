let termsAndConditionsWindow = document.getElementById("termsAndConditions");
let termsAndConditionsButton = document.getElementById("termsAndConditionsButton");
let span = document.getElementsByClassName("CloseButton")[0];

let privacyAndPolicyWindow = document.getElementById("privacyAndPolicy");
let privacyAndPolicyButton = document.getElementById("privacyAndPolicyButton");
let span1 = document.getElementsByClassName("PCloseButton")[0];

termsAndConditionsButton.onclick = function() {
    termsAndConditionsWindow.style.display = "block";
}

span.onclick = function() {
    termsAndConditionsWindow.style.display = "none";
}

privacyAndPolicyButton.onclick = function() {
    privacyAndPolicyWindow.style.display = "block";
}

span1.onclick = function() {
    privacyAndPolicyWindow.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === termsAndConditionsWindow) {
        termsAndConditionsWindow.style.display = "none";
    }
    else if (event.target === privacyAndPolicyWindow) {
        privacyAndPolicyWindow.style.display = "none";
    }
}