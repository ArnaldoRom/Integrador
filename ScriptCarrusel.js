
var contenedorImagenes = [ 'Img/carrusel/ProyectoIMG2.jpg', 'Img/carrusel/ProyectoIMG3.jpg', 'Img/carrusel/ProyectoIMG4.jpg'];
cont = 0;

function girar(contenedor__carrucel) {
    contenedor__carrucel.addEventListener('click', evt => {
        let atras = contenedor__carrucel.querySelector('.atras');
        let adelante = contenedor__carrucel.querySelector('.adelante');
        let img = contenedor__carrucel.querySelector('Img');
        let tgt = evt.target;

        if (tgt == atras) {
            if (cont > 0) {
                img.src = contenedorImagenes[cont - 1];
                cont--;
            } else {
                img.src = contenedorImagenes[imagene.length - 1];
                cont = contenedorImagenes.length - 1;
            }
        } else if (tgt == adelante) {
            if (cont < contenedorImagenes.length - 1) {
                img.src = contenedorImagenes[cont + 1];
                cont++;
            } else {
                img.src = contenedorImagenes[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedor__carrucel');
    girar(contenedor);

});