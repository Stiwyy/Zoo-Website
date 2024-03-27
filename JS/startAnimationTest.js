document.addEventListener("DOMContentLoaded", function() {
    var animationDiv = document.querySelector(".animation");
    setTimeout(function() {
        animationDiv.classList.add("animate");
    }, 500); // Starten der Animation nach 1 Sekunde
});
