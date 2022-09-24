(function(){
    emailjs.init("P1C24H9EOjHBx5BId"); // USER ID
})();

function sendMail() {
    let firstName = document.getElementById("name").value;
    let lastName = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let contactParams = {
        from_name : firstName,
        from_surname : lastName,
        from_email : email,
        from_number : number,
        subject : subject,
        message : message
    };

    document.getElementById('contactForm').reset();
    alert("Thanks you for contacting us :)");

    emailjs.send('service_1ni8b2p', 'template_w5xmh3h', contactParams).
        then(function (res) {
            console.log('SUCCESS!', res.status, res.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
}
