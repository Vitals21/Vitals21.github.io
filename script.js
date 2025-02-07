document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.botones-top button');
    const imagenPrincipal = document.getElementById('imagen-principal');
    const imagenPrincipalSrc = imagenPrincipal.src;

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const nuevaImagen = boton.dataset.imagen;

            const img = new Image();
            img.onload = () => {
                imagenPrincipal.src = nuevaImagen;

                setTimeout(() => {
                    imagenPrincipal.src = imagenPrincipalSrc;
                }, 1000); // 3 segundos
            };
            img.onerror = () => {
                console.error("Image not found: " + nuevaImagen);
                imagenPrincipal.src = "image_not_found.jpg"; // Imagen de error opcional
            };
            img.src = nuevaImagen;
        });
    });
});