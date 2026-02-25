document.addEventListener("DOMContentLoaded", function() {
    const headerDiv = document.getElementById("header-container");
    if (headerDiv) {
        fetch("header.html")
            .then(response => response.text())
            .then(data => {
                headerDiv.innerHTML = data;
                // Réattacher le gestionnaire du menu hamburger après injection
                const hamburger = headerDiv.querySelector('.hamburger');
                if (hamburger) {
                    hamburger.onclick = toggleMenu;
                }
            });
    }
});

function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("active");
}