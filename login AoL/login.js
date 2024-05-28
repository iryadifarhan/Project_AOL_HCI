document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Validate email format
    let email = document.getElementById('email').value;
    if (!isValidEmail(email)) {
        alert('Please enter a valid Binusian Email (@binus.ac.id)');
        return;
    }

    // Validate password length (example validation)
    let password = document.getElementById('password').value;
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }

    // If validation passes, redirect to homepage (example redirection)
    window.location.href = 'homepage.html'; // Replace with your actual homepage URL
});

function isValidEmail(email) {
    // Simple validation for email ending with @binus.ac.id
    return /\b[A-Za-z0-9._%+-]+@binus\.ac\.id\b/.test(email);
}
