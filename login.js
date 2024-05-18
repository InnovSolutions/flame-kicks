document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        try {
            const response = await fetch('https://localhost:7007/api/User/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer HIYmw2mu_SOnGjqDaZ4FY1epmE_otPT_q3dIqd4a'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                // Redirect or perform other actions for successful login
            } else {
                console.error('Login failed:', response.statusText);
                // Handle unsuccessful login (e.g., display error message)
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle errors (e.g., network issues)
        }
    });
});