function agregar(valor) {
    document.getElementById("pantalla").value += valor;
}

function limpiar() {
    document.getElementById("pantalla").value = "";
}

function calcular() {
    let pantalla = document.getElementById("pantalla");

    let expresion = pantalla.value
        .replace(/×/g, "*")
        .replace(/÷/g, "/");

    try {
        pantalla.value = eval(expresion);
    } catch {
        pantalla.value = "Error";
    }
}
