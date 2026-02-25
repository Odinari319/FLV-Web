function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "FLV" && pass === "cnouslesmeilleurs") {
        localStorage.setItem("authenticated", "true");
        window.location.href = "ressources.html";
    } else {
        document.getElementById("error").innerText = "Accès refusé.";
    }
}

function checkAuth() {
    if (localStorage.getItem("authenticated") !== "true") {
        window.location.href = "login.html";
    }
}

function logout() {
    localStorage.removeItem("authenticated");
    window.location.href = "index.html";
}