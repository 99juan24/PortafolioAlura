document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".formcontato__form");
    const inputs = form.querySelectorAll(".formcontato__input, .formcontato__textarea");
    const button = form.querySelector(".formcontato__botao");

    form.addEventListener("submit", function(event) {
        let valid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                showError(input, "Este campo no puede estar vacío.");
                valid = false;
            } else {
                hideError(input);
            }

            if (input.name === "nombre" || input.name === "asunto") {
                if (input.value.length > 50) {
                    showError(input, "El campo no debe tener más de 50 caracteres.");
                    valid = false;
                }
            }

            if (input.name === "email") {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(input.value)) {
                    showError(input, "Ingresa un correo electrónico válido.");
                    valid = false;
                }
            }

            if (input.name === "mensaje") {
                if (input.value.length > 300) {
                    showError(input, "El mensaje no debe tener más de 300 caracteres.");
                    valid = false;
                }
            }
        });

        if (!valid) {
            event.preventDefault();
        }
    });

    function showError(input, message) {
        const errorDiv = input.parentNode.querySelector(".error-message");
        if (!errorDiv) {
            const errorDiv = document.createElement("div");
            errorDiv.className = "error-message";
            errorDiv.textContent = message;
            input.parentNode.appendChild(errorDiv);
        } else {
            errorDiv.textContent = message;
        }
    }

    function hideError(input) {
        const errorDiv = input.parentNode.querySelector(".error-message");
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    form.addEventListener("input", function(event) {
        if (inputs.every(input => input.value.trim())) {
            button.removeAttribute("disabled");
        } else {
            button.setAttribute("disabled", "disabled");
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll(".menu__list__item a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetSectionId = link.getAttribute("href");
            const targetSection = document.querySelector(targetSectionId);

            if (targetSection) {
                const yOffset = -60; // Ajusta este valor según el diseño de tu encabezado
                const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        });
    });
});

