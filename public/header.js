document.addEventListener("DOMContentLoaded", function() {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        });
});

function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("active");
}