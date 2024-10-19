document.addEventListener('DOMContentLoaded', function() {
    const carrito = document.getElementById('carrito');
    const elementos1 = document.getElementById('lista-1');
    const elementos2 = document.getElementById('lista2');
    const lista = document.querySelector('#lista-carrito tbody');
    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

    cargarEventlisteners();

    function cargarEventlisteners() {
        elementos1.addEventListener('click', comprarElemento);
        elementos2.addEventListener('click', comprarElemento);
        carrito.addEventListener('click', eliminarElemento);
        vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
        console.log("con éxito");
    }

    function comprarElemento(e) {
        e.preventDefault();
        if (e.target.classList.contains('agregar-carrito')) {
            const elemento = e.target.parentElement;
            leerDatosElemento(elemento);
            console.log("con éxito");
        }
    }

    function leerDatosElemento(elemento) {
        const infoElemento = {
            imagen: elemento.querySelector('img').src,
            titulo: elemento.querySelector('h3').textContent,
            precio: elemento.querySelector('.precio').textContent,
            id: elemento.querySelector('a').getAttribute('data-id')
        };
        console.log("con éxito");

        insertarCarrito(infoElemento);
    }

    function insertarCarrito(elemento) {
        const row = document.createElement('tr');
        row.innerHTML =  ` 
            <td>
                <img src="${elemento.imagen}" width=100>
            </td>
            <td>
                ${elemento.titulo}
            </td>
            <td>
                ${elemento.precio}
            </td>
            <td>
                <a href="#" class="borrar" data-id="${elemento.id}">X</a>   
            </td>
        `;
        lista.appendChild(row);
    }

    function eliminarElemento(e) {
        e.preventDefault();
        if (e.target.classList.contains('borrar')) {
            e.target.parentElement.parentElement.remove(); // Elimina el elemento <tr>
            const elementoid = e.target.getAttribute('data-id');
            console.log("Elemento con ID " + elementoid + " eliminado.");
        }
    }

    function vaciarCarrito() {
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
        return false;
    }

    #whatsapp {
        position: fixed;
        bottom:05px;
        right:05px;
     }
     svg {
        width: 10px;
        filter: drop-shadow(0 1px 4px rgba(0,0,0,.4));
     }
     <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<!-- Created with SVG-edit - https://github.com/SVG-Edit/svgedit-->
<g class="layer">
<title>Layer 1</title>
<circle cx="40" cy="40" fill="#fff" id="svg_1" r="38" stroke="#000000" stroke-width="0"/>
<path d="m57.81072,21.975c-4.48928,-4.5 -10.46786,-6.975 -16.82142,-6.975c-13.11429,0 -23.78571,10.67143 -23.78571,23.78571c0,4.18928 1.09286,8.28215 3.17143,11.89286l-3.375,12.32142l12.61072,-3.31072c3.47143,1.89642 7.38215,2.89286 11.36786,2.89286l0.01072,0c13.10358,0 24.01072,-10.67143 24.01072,-23.78571c0,-6.35357 -2.7,-12.32142 -7.18928,-16.82142l-0.00001,-0.00001l-0.00001,0l-0.00002,0.00001zm-16.82142,36.6c-3.55714,0 -7.03928,-0.95357 -10.07143,-2.75357l-0.71785,-0.42857l-7.47858,1.96072l1.99286,-7.29642l-0.47143,-0.75c-1.98215,-3.15 -3.02142,-6.78215 -3.02142,-10.52142c0,-10.89642 8.87143,-19.76786 19.77858,-19.76786c5.28215,0 10.24286,2.05714 13.97143,5.79642c3.72857,3.73928 6.02142,8.7 6.01072,13.98215c0,10.90714 -9.09642,19.77858 -19.99286,19.77858l0,-0.00002l-0.00001,0l-0.00001,-0.00001zm10.84286,-14.80714c-0.58928,-0.3 -3.51429,-1.73572 -4.06072,-1.92857c-0.54643,-0.20358 -0.94286,-0.3 -1.33928,0.3c-0.39642,0.6 -1.53214,1.92857 -1.88571,2.33572c-0.34286,0.39642 -0.69642,0.45 -1.28571,0.15c-3.49286,-1.74643 -5.78571,-3.11785 -8.08928,-7.07143c-0.61072,-1.05 0.61072,-0.975 1.74643,-3.24643c0.19286,-0.39642 0.09642,-0.73928 -0.05357,-1.03928c-0.15,-0.3 -1.33928,-3.225 -1.83214,-4.41429c-0.48215,-1.15714 -0.975,-0.99642 -1.33928,-1.01785c-0.34286,-0.02142 -0.73928,-0.02142 -1.13572,-0.02142c-0.39642,0 -1.03928,0.15 -1.58571,0.73928c-0.54643,0.6 -2.07858,2.03572 -2.07858,4.96072c0,2.925 2.13214,5.75357 2.42142,6.15c0.3,0.39642 4.18928,6.39642 10.15714,8.97858c3.77143,1.62857 5.25,1.76786 7.13572,1.48928c1.14643,-0.17143 3.51429,-1.43572 4.00714,-2.82857c0.49286,-1.39286 0.49286,-2.58215 0.34286,-2.82857c-0.13928,-0.26786 -0.53572,-0.41785 -1.125,-0.70714l-0.00001,-0.00001l0.00002,-0.00001l-0.00002,-0.00001z" fill="currentColor" id="svg_2"/>
</g>

</svg>
circle {
   fill: #25d366;
}
path {
   fill: rgb(47, 235, 9);
}
});

