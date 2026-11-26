
document.addEventListener("DOMContentLoaded", function () {

    // Automatic copyright year
    var year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Terminal welcome animation
    var typing = document.getElementById("typing");

    if (typing) {

        var message = "whoami";
        var position = 0;

        function typeMessage() {

            if (position < message.length) {
                typing.textContent += message.charAt(position);
                position++;

                setTimeout(typeMessage, 130);
            }
        }

        typeMessage();
    }

    console.log("p4ssk3yzz Research Hub initialized.");
    console.log("Learn ethically. Build responsibly.");

});
