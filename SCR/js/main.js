alert("Dilan... La promesa de WEB");

const x = document.getElementById("result");

if (typeof(Storage) !== "undefined") {
  x.innerHTML = "Your browser supports Web storage!";
} else {
  x.innerHTML = "Sorry, no Web storage support!";
}

function saveToLocalStorage() {
    var name = document.getElementById("nameLocal").value;
    if (name) {
        localStorage.setItem("userName", name);
        alert("Nombre guardado: " + name);
    } else {
        alert("Por favor ingresa un nombre");
    }
}

function saveToSessionStorage() {
    var name = document.getElementById("nameSession").value;
    if (name) {
        sessionStorage.setItem("userSession", name);
        alert("Nombre guardado en sesión: " + name);
    } else {
        alert("Por favor ingresa un nombre");
    }
}

// Cargar datos guardados al abrir la página
window.addEventListener("load", function() {
    var savedName = localStorage.getItem("userName");
    var savedSession = sessionStorage.getItem("userSession");
    
    if (savedName) {
        document.getElementById("nameLocal").value = savedName;
    }
    if (savedSession) {
        document.getElementById("nameSession").value = savedSession;
    }
});