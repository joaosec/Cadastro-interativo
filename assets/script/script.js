
    const registerLink = document.getElementById("registerLink");
    const registerText = document.getElementById("registerText");
    const flipCard = document.getElementById("flipCard");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    registerLink.addEventListener("click", (e) => {
        e.preventDefault();
        flipCard.classList.toggle("flipped");

        if (flipCard.classList.contains("flipped")) {
            loginForm.style.display = "none";
            registerForm.classList.add("active");
            registerText.style.display = "none"; 
        } else {
            loginForm.style.display = "block";
            registerForm.classList.remove("active");
            registerText.style.display = "block"; 
        }
    });