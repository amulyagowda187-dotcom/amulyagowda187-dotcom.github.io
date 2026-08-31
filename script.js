// Smooth scrolling for navigation

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// Small welcome message

console.log("Welcome to Amulya's Portfolio 🚀");