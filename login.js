// filepath: script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password');
    }
});