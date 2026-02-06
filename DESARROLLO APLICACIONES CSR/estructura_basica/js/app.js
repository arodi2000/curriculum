document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-theme');
    const body = document.body;

    if (!toggleButton) {
        console.error('No se encontró el botón #toggle-theme');
        return;
    }

    // Función para actualizar el texto del botón
    function updateButtonText() {
        if (body.classList.contains('night-mode')) {
            toggleButton.textContent = 'Modo claro ☀️';
        } else {
            toggleButton.textContent = 'Modo oscuro 🌙';
        }
    }

    // Cargar preferencia guardada (si existe)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('night-mode');
    }
    updateButtonText();

    // Evento click
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('night-mode');

        // Guardar preferencia
        if (body.classList.contains('night-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }

        updateButtonText();
    });
});