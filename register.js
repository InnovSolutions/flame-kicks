document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.querySelector('.register-form');

    registerForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const username = registerForm.querySelector('input[name="username"]').value;
        const email = registerForm.querySelector('input[name="email"]').value;
        const password = registerForm.querySelector('input[name="password"]').value;

        try {
            const apiUrl = 'https://localhost:7007/api/user/register';
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer HIYmw2mu_SOnGjqDaZ4FY1epmE_otPT_q3dIqd4a'
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                })
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Registration successful:', data);
                // Redirect or perform other actions for successful registration
            } else {
                console.error('Registration failed:', response.statusText);
                // Handle unsuccessful registration (e.g., display error message)
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle errors (e.g., network issues)
        }
    });
});