// Cargar contador desde localStorage
let clicks = localStorage.getItem("contador_clicks") || 0;

document.getElementById("contador").innerText = clicks;

// Evento al hacer clic en el botón
document.getElementById("btn").addEventListener("click", function () {
    clicks++;
    localStorage.setItem("contador_clicks", clicks);
    document.getElementById("contador").innerText = clicks;
});
