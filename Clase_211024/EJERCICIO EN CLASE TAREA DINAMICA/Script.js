// Inicializa el array vacío completamente para guardar las Tareitas
const Tareitas = [];

// Función para actualizar la consola y mostrar en pantalla la lista de Tareitas
function actualizarsistema() {
    console.clear(); 
    // Borra la consola para mostrar la nueva lista

    console.log("Lista de Tareitas:", Tareitas); 
    // Muestra la lista actualizada de Tareitas en la consola
}

// Función para agregar una nueva tarea
function agregartarea() {
    const entradatarea = document.getElementById('ingresar-tarea');
    const valortarea = entradatarea.value.trim();
    
    if (valortarea) {
        Tareitas.push(valortarea); 
        // Agrega la tarea al array de Tareitas

        entradatarea.value = ''; 
        // Limpia el campo de entrada

        convertirTareitas(); 
        // Renderiza las Tareitas en el DOM

        actualizarsistema(); 
        // Actualiza la consola
    }
}

// Función para eliminar una tarea por su índice
function eliminartarea(indice) {
    Tareitas.splice(indice, 1); 
    // Elimina la tarea en el índice indicado

    convertirTareitas(); 
    // Renderiza otra vez las Tareitas

    actualizarsistema(); 
    // Actualiza la consola actual
}

// Función para renderizar la lista de Tareitas en el DOM
function convertirTareitas() {
    const liListaTareitas = document.getElementById('taskList');
    liListaTareitas.innerHTML = ''; 
    // Limpia el contenido previo

    for (let i = 0; i < Tareitas.length; i++) {
        const litarea = document.createElement('li');
        litarea.innerHTML = `${Tareitas[i]} <button onclick="eliminartarea(${i})">Eliminar</button>`;
        liListaTareitas.appendChild(litarea);
    }
}

// Asigna eventos al botón para agregar y al campo de entrada que se muestra
document.getElementById('añadir-tarea').addEventListener('click', agregartarea);
document.getElementById('ingresar-tarea').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') agregartarea();
});