document.addEventListener("DOMContentLoaded", function () {
    const countdownElement = document.getElementById("countdown");
    const authSection = document.getElementById("auth-section");
    const surpriseSection = document.getElementById("surprise-section");
    const authForm = document.getElementById("auth-form");
    const errorMessage = document.getElementById("error-message");
    
    // Set countdown date to 02/26/2025
    const countdownDate = new Date("February 09, 2025 00:00:00").getTime();
    
    const countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        if (distance <= 0) {
            clearInterval(countdownInterval);
            countdownElement.style.display = "none";
            authSection.classList.remove("hidden");
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
    
    authForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const answers = {
            q1: "Lasagna",
            q2: "She doesn't have one",
            q3: "Love at First Sight",
            q4: "Hacharat"
        };
        
        if (
            document.getElementById("q1").value.trim().toLowerCase() === answers.q1.toLowerCase() &&
            document.getElementById("q2").value.trim().toLowerCase() === answers.q2.toLowerCase() &&
            document.getElementById("q3").value.trim().toLowerCase() === answers.q3.toLowerCase() &&
            document.getElementById("q4").value.trim().toLowerCase() === answers.q4.toLowerCase()
        ) {
            authSection.style.display = "none";
            surpriseSection.classList.remove("hidden");
        } else {
            errorMessage.classList.remove("hidden");
        }
    });
});
