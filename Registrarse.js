// Seleccionar el formulario
const formulario = document.getElementById("formRegistro");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const contraseña = document.getElementById("password").value;
    const confirmar = document.getElementById("confirmar").value;

    // Validar campos vacíos
    if (nombre === "" || correo === "" || contraseña === "" || confirmar === "") {
        alert("Completa todos los campos.");
        return;
    }

    // Validar correo
    const expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expresionCorreo.test(correo)) {
        alert("Ingresa un correo válido.");
        return;
    }

    // Validar longitud de contraseña
    if (contraseña.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return;
    }

    // Confirmar contraseña
    if (contraseña !== confirmar) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Guardar en LocalStorage
    const usuario = {
        nombre,
        correo,
        contraseña
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("¡Cuenta creada correctamente!");

    formulario.reset();
});

// Ir a la ventana de registro
function irRegistro() {
    window.location.href = "Registrarse.html";
}

// Volver al inicio de sesión
function irLogin() {
    window.location.href = "Inicio sesion.html";
}