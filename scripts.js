document.addEventListener('DOMContentLoaded', () => {
    // Temporizador
    let countdownElement = document.getElementById('countdown');
    let timeLeft = 300; // Tiempo en segundos

    function updateTimer() {
        countdownElement.textContent = timeLeft;
        timeLeft -= 1;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            countdownElement.textContent = '0';
        }
    }

    let timerInterval = setInterval(updateTimer, 1000);

    // Manejo del formulario
    document.getElementById('login-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Error: Intente más tarde.');
    });
});
