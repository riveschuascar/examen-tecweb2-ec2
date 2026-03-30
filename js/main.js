window.addEventListener("DOMContentLoaded", activarNav);
document.addEventListener("DOMContentLoaded", buscarProductos);
const imagenesDOM = document.querySelectorAll('.carrusel');

let imagenesRuta = [
    'img/cafe-galeria.png',
    'img/masas-galeria.png',
    'img/granos.png'
];

function rotarCarrusel() {
    let primero = imagenesRuta.shift();
    imagenesRuta.push(primero);

    for (let i = 0; i < imagenesDOM.length; i++) {
        imagenesDOM[i].src = imagenesRuta[i];
    }
}

setInterval(rotarCarrusel, 3000);

document.addEventListener("DOMContentLoaded", () => {

    const btnHamburguesa = document.getElementById('btn-menu');
    const menuEnlaces = document.getElementById('nav-links');

    if (btnHamburguesa && menuEnlaces) {
        btnHamburguesa.addEventListener('click', function () {
            menuEnlaces.classList.toggle('menu-abierto');
        });
    }

    const btnSubir = document.getElementById('btn-subir');

    if (btnSubir) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                btnSubir.classList.add('mostrar');
            } else {
                btnSubir.classList.remove('mostrar');
            }
        });

        btnSubir.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    const btnAbrirModal = document.getElementById('btn-ver-menu');
    const modalMenu = document.getElementById('modal-menu');
    const btnCerrarModal = document.getElementById('btn-cerrar-modal');

    if (btnAbrirModal && modalMenu && btnCerrarModal) {
        btnAbrirModal.addEventListener('click', function (evento) {
            evento.preventDefault();
            modalMenu.classList.add('modal-visible');
        });

        btnCerrarModal.addEventListener('click', function () {
            modalMenu.classList.remove('modal-visible');
        });
    }


});

function enviarFormulario() {
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa tu nombre completo");
        return;
    }

    if (email === "") {
        alert("Por favor, ingresa tu email");
        return;
    }

    if (mensaje === "") {
        alert("Por favor, escribe un mensaje");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Ingresa un email válido");
        return;
    }

    alert("Formulario enviado correctamente");

    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensaje").value = "";
}
function activarNav() {
    let paginaActual = window.location.pathname.split("/").pop();

    if (paginaActual === "") {
        paginaActual = "index.html";
    }

    let links = document.querySelectorAll("#nav-links a");

    links.forEach(link => {
        let href = link.getAttribute("href");

        if (href === paginaActual) {
            link.classList.add("activo");
        }
    });
}
function buscarProductos() {
    const input = document.getElementById("buscadorInput");
    const productos = document.querySelectorAll("article");
    const mensaje = document.getElementById("mensajeVacio");

    input.addEventListener("input", () => {
        const texto = input.value.toLowerCase();
        let hayResultados = false;

        productos.forEach(producto => {
            const textoProducto = producto.textContent.toLowerCase();

            if (textoProducto.includes(texto)) {
                producto.style.display = "";
                hayResultados = true;
            } else {
                producto.style.display = "none";
            }
        });
        console.log(mensaje)
        // Mostrar u ocultar mensaje
        if (hayResultados) {
            mensaje.style.display = "none";
        } else {
            mensaje.style.display = "block";
        }
    });
}
