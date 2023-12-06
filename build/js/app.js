document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
});

function iniciarApp() {
    crearGaleria();
}

function crearGaleria() {

    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <pinture>
            <sourse srcset="build/img/thumb/${i}.avif" type="image/avif">
            <sourse srcset="build/img/thumb/${i}.webp" type="image/webp">
            <img src="build/img/thumb/${i}.jpg"alt="Galeria">
        </pinture
    `;

        galeria.appendChild(imagen);

    }

}