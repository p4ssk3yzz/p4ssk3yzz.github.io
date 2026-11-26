
/* =====================================
   P4SSK3YZZ - INTERACTIVE FEATURES
===================================== */

// Automatically update copyright year
document.addEventListener("DOMContentLoaded", function () {

    var footer = document.querySelector("footer p");

    if (footer) {
        var year = new Date().getFullYear();
        footer.innerHTML = footer.innerHTML.replace(
            /2026/,
            year
        );
    }

    // Smooth navigation
    var links = document.querySelectorAll(
        '.nav-links a[href^="#"]'
    );

    for (var i = 0; i < links.length; i++) {

        links[i].addEventListener("click", function (event) {

            var target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    }

    // Welcome message in browser console
    console.log(
        "P4SSK3YZZ Research Hub initialized."
    );

    console.log(
        "Learn ethically. Build responsibly."
    );

});
