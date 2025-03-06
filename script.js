let timeLeft = 60; // 1 minute in seconds
const timerElement = document.getElementById('timer');
const countdown = setInterval(() => {
    // Calculate minutes and seconds
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    // Format time as MM:SS
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    // Decrease time left
    timeLeft--;
    // Check if time is up
    if (timeLeft < 0) {
        clearInterval(countdown);
        alert("The site is now offline.");
        // Redirect to an offline page or display a message
        document.body.innerHTML = '<h1>Site Offline</h1><p>The site is currently offline. Please check back later.</p>';
    }
}, 1000);