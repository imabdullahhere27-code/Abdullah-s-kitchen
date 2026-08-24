const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// MENU FILTER

const filterButtons = document.querySelectorAll(".filter");
const foodCards = document.querySelectorAll(".food-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const selectedCategory =
            button.getAttribute("data-filter");

        foodCards.forEach(card => {

            const category =
                card.getAttribute("data-category");

            if (
                selectedCategory === "all" ||
                category === selectedCategory
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });

    });

});


// RESERVATION FORM

const reservationForm =
    document.getElementById("reservationForm");

if (reservationForm) {

    reservationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you! Your reservation request has been received.");

        reservationForm.reset();

    });

}