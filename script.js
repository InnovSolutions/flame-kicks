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

document.querySelector('#newsletter').addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get the value of the email input field
    const email = document.querySelector('#email').value;
    
    // Send email using Email.js and Elastic Email's SMTP server
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "innov.solutions005@gmail.com",
        Password : "E6CEA9D870BE59E12E00CED4267294818A3E",
        To : email, // Use the email submitted through the form
        From : "innov.solutions005@gmail.com",
        Subject : "Newsletter",
        Body : `Stay Updated with Our Newsletter!\n\nDear Subscriber,\n\nWe're thrilled to introduce our newsletter, your gateway to the latest trends, exclusive offers, and exciting updates from the world of Flame Kicks!\n\nBy subscribing to our newsletter, you'll gain access to:\n\n1. **Exclusive Sneaker Releases:** Be the first to know about the hottest sneaker drops, limited editions, and restocks.\n2. **Fashion Tips & Trends:** Stay ahead of the curve with our expert-curated fashion tips, style guides, and trend forecasts.\n3. **Special Offers & Discounts:** Enjoy subscriber-only discounts, early access to sales, and special promotions.\n4. **Behind-the-Scenes Content:** Get an insider's look into the world of Flame Kicks with behind-the-scenes stories, brand insights, and interviews.\n\nOur newsletter is designed to keep you informed, inspired, and connected to the vibrant sneaker and streetwear community. Don't miss out on the excitement—subscribe now and elevate your style game with Flame Kicks!\n\nBest Regards,\n[Your Name]\n[Your Position/Title]\nFlame Kicks`
    }).then(
        message => alert(message)
    );
});
