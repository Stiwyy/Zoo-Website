document.addEventListener("DOMContentLoaded", function() {
    var animationDiv = document.querySelector(".animation");
    setTimeout(function() {
        animationDiv.classList.add("animate");
    }, 300);
});
