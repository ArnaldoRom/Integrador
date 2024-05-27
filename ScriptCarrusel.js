var contenedorImagenes = ['Img/carrusel/ProyectoIMG2.jpg', 'Img/carrusel/ProyectoIMG3.jpg', 'Img/carrusel/ProyectoIMG4.jpg'];
cont = 0;

function girar(contenedor__carrucel) {
    contenedor__carrucel.addEventListener('click', evt => {
        let atras = contenedor__carrucel.querySelector('.atras');
        let adelante = contenedor__carrucel.querySelector('.adelante');
        let img = contenedor__carrucel.querySelector('.imagenCarrusel');  // Referencia correcta a la clase de la imagen
        let eventTgt = evt.target;

        if (eventTgt == atras) {
            if (cont > 0) {
                cont--;
                img.src = contenedorImagenes[cont];
            } else {
                cont = contenedorImagenes.length - 1;
                img.src = contenedorImagenes[cont];
            }
        } else if (eventTgt == adelante) {
            if (cont < contenedorImagenes.length - 1) {
                cont++;
                img.src = contenedorImagenes[cont];
            } else {
                cont = 0;
                img.src = contenedorImagenes[cont];
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedor__carrucel');
    girar(contenedor);
});