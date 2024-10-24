let task = ["Comprar", "Estudiar", "Limpiar Casa"];

console.log("Lista de Tareas", task);
task.push("Ir a la escuela");
task.splice(3, 1)
task.push("Ir a casa");
//-------------------------------------------------
let tasks = ["Comprar", "Estudiar", "Limpiar Casa"];

tasks.forEach((task, index) => {
    console.log(`Tarea $(index) $(task)`);
})