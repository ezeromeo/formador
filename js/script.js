document.addEventListener("DOMContentLoaded", function() {
    const tbody = document.querySelector('.table tbody');
    const nombres = [
        "Diego Pérez", "Mathias Rodríguez", "María González", "Mathias Rodríguez",
        "Pablo Muñoz", "María González", "María González", "María González",
        "Diego Pérez", "Mathias Rodríguez", "Pablo Muñoz", "Diego Pérez",
        "Diego Pérez", "María González", "María González"
    ];
    let tbodyContent = nombres.map((nombre, index) => {
        const entradaIcon = (index <= 7 || (index >= 10 && index <= 12)) ? 'Ok.svg' : 'INCIDENCIA.svg';
        const salidaIcon = [0, 2, 5, 6, 7, 8, 9, 11, 12, 13, 14].includes(index) ? 'PENDIENTE.svg' : 'Ok.svg';
        const exclamation = index === 9 ? '<div class="d-flex align-items-center justify-content-center"><img class="me-2" src="assets/img/exclamation-warning.svg" alt=""><img src="assets/img/chat-dots.svg" alt=""></div>' : '';

        return `
        <tr>
            <td class="text-center">${nombre}</td>
            <td class="text-center"><img src="assets/img/${entradaIcon}" alt="Entrada"></td>
            <td class="text-center"><img src="assets/img/${salidaIcon}" alt="Salida"></td>
            <td class="text-center">${exclamation}</td>
        </tr>`;
    }).join('');
    tbody.innerHTML = tbodyContent;

    const triggerNuevoAlumno = document.getElementById('triggerNuevoAlumno');
    const nuevoAlumnoModal = new bootstrap.Modal(document.getElementById('nuevoAlumno'));
    triggerNuevoAlumno.addEventListener('click', () => nuevoAlumnoModal.show());

    const activarProyectarQr = document.getElementById('activarProyectarQr');
    const proyectaQrModal = new bootstrap.Modal(document.getElementById('proyectaQrModal'));
    activarProyectarQr.addEventListener('click', () => proyectaQrModal.show());

    const activarChatbot = document.getElementById('activarChatbot');
    const chatbotModal = new bootstrap.Modal(document.getElementById('chatbotModal'));
    activarChatbot.addEventListener('click', ()=> chatbotModal.show());
});
