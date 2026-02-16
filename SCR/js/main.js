
alert("Dilan... La promesa de WEB");

const x = document.getElementById("result");
if (typeof(Storage) !== "undefined") {
  x.innerHTML = "Your browser supports Web storage!";
} else {
  x.innerHTML = "Sorry, no Web storage support!";
}

function saveToLocalStorage() {
    var name = document.getElementById("name").value;
    localStorage.setItem("name", name);
    alert("Name saved to local storage!");
}

function saveToSessionStorage() {
    var name = document.getElementById("name").value;
    sessionStorage.setItem("name", name);
    alert("Name saved to session storage!");
}