var contenedorImagenes = ['https://fs.npstatic.com/userfiles/7752400/image/T20_Omni_Screenshot_2-w450.png', 'https://www.tandemsurveys.com/wp-content/uploads/2023/01/saas-layered-img2-2.png',
'https://fs.npstatic.com/userfiles/7752400/image/5_apps_2-w782.png', 'https://images.ctfassets.net/870hsirrgf0c/69OnE2Vm5AgtV4B5SoGXZj/d92a3e1d3036f3b92a08caabb56e900c/image-1_compressed.png?w=1600&h=1125&q=100'
];
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