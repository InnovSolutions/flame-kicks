document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.querySelector('.login-form');

    // Check if the form exists
    if (registerForm) {
        registerForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const username = registerForm.querySelector('input[placeholder="Username"]').value;
            const email = registerForm.querySelector('input[placeholder="Email"]').value;
            const password = registerForm.querySelector('input[placeholder="Password"]').value;

            try {
                const response = await fetch('https://localhost:7007/api/User/register', {
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
                    console.log('Registration successful:', responseBody);
                    // Redirect or perform other actions for successful registration
                    window.location.href = 'login.html'; // change this to your actual path
                } else {
                    console.error('Registration failed:', responseBody);
                    // Handle unsuccessful registration (e.g., display error message)
                    alert('Registration failed: ' + responseBody);
                }
            } catch (error) {
                console.error('Error:', error);
                // Handle errors (e.g., network issues)
                alert('An error occurred: ' + error.message);
            }
        });
    } else {
        console.error('Register form not found');
    }
});