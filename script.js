// Get all elements with the class "buy-button"
const buyButtons = document.querySelectorAll('.buy-button');

// Loop through each button and add a click event listener
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Redirect to the buy page
        window.location.href = 'buypage.html';
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const productCards = document.querySelectorAll(".card");

    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase();

        productCards.forEach(function(card) {
            const productName = card.querySelector(".card-text").textContent.toLowerCase();

            if (productName.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(event) {
        if (event.target.matches('.buy-btn')) {
            const targetId = event.target.getAttribute('data-target');
            const dropdownMenu = document.getElementById(targetId);
            event.target.style.display = 'none'; // Hide the Buy button
            dropdownMenu.style.display = 'block'; // Show the dropdown
        } else if (event.target.matches('.add-to-cart-btn')) {
            const dropdownMenu = event.target.closest('.dropdown-menu');
            const buyButton = dropdownMenu.previousElementSibling;
            dropdownMenu.style.display = 'none'; // Hide the dropdown
            buyButton.style.display = 'inline-block'; // Show the Buy button
        }
    });
});
