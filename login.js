document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const username = loginForm.querySelector('input[placeholder="Username"]').value;
        const email = loginForm.querySelector('input[placeholder="Email"]').value;
        const password = loginForm.querySelector('input[placeholder="Password"]').value;

        try {
            const response = await fetch('https://localhost:7007/api/User/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                })
            });

            const contentType = response.headers.get('content-type');
            let responseBody;

            if (contentType && contentType.indexOf('application/json') !== -1) {
                responseBody = await response.json();
            } else {
                responseBody = await response.text();
            }

            if (response.ok) {
                console.log('Login successful:', responseBody);
                // Redirect or perform other actions for successful registration
                window.location.href = 'index.html'; // change this to your actual path
            } else {
                console.error('Login failed:', responseBody);
                // Handle unsuccessful registration (e.g., display error message)
                alert('Login failed: ' + responseBody);
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle errors (e.g., network issues)
            alert('An error occurred: ' + error.message);
        }
    });
});