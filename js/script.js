document.addEventListener("DOMContentLoaded", function() {
    const tbody = document.querySelector('.table tbody');
    const nombres = [
        "Diego Pérez", "Mathias Rodríguez", "María González", "Mathias Rodríguez",
        "Pablo Muñoz", "María González", "María González", "María González",
        "Diego Pérez", "Mathias Rodríguez", "Pablo Muñoz", "Diego Pérez",
        "Diego Pérez", "María González", "María González"
    ];
    let tbodyContent = nombres.map((nombre, index) => {
        const entradaIcon = (index <= 7 || (index >= 10 && index <= 12)) ? 'aceptar.svg' : 'INCIDENCIA.svg';
        const salidaIcon = [0, 2, 5, 6, 7, 8, 9, 11, 12, 13, 14].includes(index) ? 'PENDIENTE.svg' : 'aceptar.svg';
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

    const activarAgenda = document.getElementById('activarAgenda');
    const agendaModal = new bootstrap.Modal(document.getElementById('agendaModal'));
    activarAgenda.addEventListener('click', ()=> agendaModal.show());

    const tbodyCalendar = document.getElementById('calendarBody');
    let weekRow = '<tr>';
    const daysArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    daysArray.forEach((day, index) => {
    
        let isWeekday = (index % 7) < 5;
        if (isWeekday) {
            weekRow += `<td><div class="weekday">${day}</div></td>`;
        } else {
            weekRow += `<td><div class="weekend">${day}</div></td>`;
        }
        
    
        if ((index + 1) % 7 === 0 || index === daysArray.length - 1) {
            weekRow += '</tr>';
            tbodyCalendar.innerHTML += weekRow;
            weekRow = '<tr>';
        }
    });

    const messageBox = document.getElementById('messageBox');
    const messagesContainer = document.getElementById('messagesContainer');
    const fileInput = document.getElementById('fileInput');
    const attachButton = document.getElementById('attachButton');
    const cancelAttachmentButton = document.getElementById('cancelAttachmentButton');
    const sendButton = document.getElementById('sendButton');

    attachButton.addEventListener('click', function() {
        fileInput.click();
    });

    cancelAttachmentButton.addEventListener('click', function() {
        fileInput.value = '';
    });

    sendButton.addEventListener('click', function() {
        const messageText = messageBox.value.trim();
        
        if (messageText || fileInput.files.length > 0) {
            const messageElement = document.createElement('div');
            messageElement.className = 'chat-message';
    
            const superiorElement = document.createElement('div');
            superiorElement.className = 'superior d-flex align-items-center justify-content-between';
            const nombreElement = document.createElement('p');
            nombreElement.className = 'nombreSuperior ms-2';
            nombreElement.textContent = 'Diego Pérez'; 
            const fechaElement = document.createElement('p');
            fechaElement.className = 'fechaSuperior me-2';
            fechaElement.textContent = new Date().toLocaleString(); 
    
            superiorElement.appendChild(nombreElement);
            superiorElement.appendChild(fechaElement);
    
            const inferiorElement = document.createElement('div');
            inferiorElement.className = 'inferior';
            const textoElement = document.createElement('p');
            textoElement.className = 'textoInferior';
            textoElement.textContent = messageText;
    
            inferiorElement.appendChild(textoElement);
    
            
            if (fileInput.files.length > 0) {
                const archivoElement = document.createElement('p');
                archivoElement.className = 'textoInferior';
                archivoElement.textContent = `Adjunto: ${fileInput.files[0].name}`;
                inferiorElement.appendChild(archivoElement);
            }
    
            messageElement.appendChild(superiorElement);
            messageElement.appendChild(inferiorElement);
    
            messagesContainer.appendChild(messageElement);
    
            
            messageBox.value = '';
            fileInput.value = ''; 
            if (fileDisplay) {
                fileDisplay.value = ''; 
            }
        }
    });
    

    const activarBell = document.getElementById('activarBell');
    const chatModal = new bootstrap.Modal(document.getElementById('chatModal'));
    activarBell.addEventListener('click', ()=> chatModal.show());

    attachButton.addEventListener('click', function() {
        fileInput.click(); 
    });
    
    fileInput.addEventListener('change', function() {
        if (fileInput.files.length > 0) {
            fileDisplay.value = `Adjuntar: ${fileInput.files[0].name}`; 
        }
    });
    
    cancelAttachmentButton.addEventListener('click', function() {
        fileInput.value = ''; 
        fileDisplay.value = ''; 
    });
    
    fileDisplay.addEventListener('click', function(event) {
        event.stopPropagation(); 
    });
    

});


