function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var destination = document.getElementById("destination").value;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (destination === "") {
        alert("Please enter a desired destination.");
        return false;
    }

    document.getElementById("success-message").style.display = "block";
    document.getElementById("contact-form").reset();
    return false; 
}
