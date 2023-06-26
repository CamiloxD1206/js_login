//funcion de para hacer los cambios a motoposada
function motoposada() {
    const cambiomp = document.querySelector('.bienvenida').textContent = 'BIENVENIDO MOTOPOSADA';

    const solicitudes = document.querySelector('#quienes_somos h1').textContent = 'Solicitudes'
    const servicios = document.querySelector('#servicios h1').textContent = 'Comentarios'
        //--------------------lista(barra de navegacion)----------------------------
    const lista = document.querySelector('.lista')
        //---------solicitudes para motoposada--------------------------------
    const solicitudesmp = document.createElement('li')
    const solicitudesmplink = document.createElement('a')
    solicitudesmplink.href = '#quienes_somos';
    solicitudesmplink.textContent = 'solicitudes'
    lista.appendChild(solicitudesmp);
    solicitudesmp.appendChild(solicitudesmplink);
    const elementoExistente = lista.children[1];
    lista.insertBefore(solicitudesmp, elementoExistente);
    //--------comentarios para motoposada-----------
    const lista2 = document.querySelector('.lista')
    const comentariosmp = document.createElement('li')
    const comentariosmplink = document.createElement('a')
    comentariosmplink.href = '#servicios';
    comentariosmplink.textContent = 'Comentarios'
    lista2.appendChild(comentariosmp);
    comentariosmp.appendChild(comentariosmplink);
    const elementoExistente1 = lista2.children[2];
    lista2.insertBefore(comentariosmp, elementoExistente1);
    //--------eliminacion-enlaces antiguos
    var elemento = lista.children[3];
    lista.removeChild(elemento);
    //------------------dropdown-------------------
    const cambio = document.querySelector('.dropdown-menu ');
    const motoviajerocambio = document.createElement('li');
    motoviajerocambio.onclick = function llamado() {
        window.location = 'inicio_usumv.html';
    }
    const motoviajerolink = document.createElement('a');
    motoviajerocambio.textContent = 'Ser motoviajero';
    cambio.appendChild(motoviajerocambio);
    motoviajerocambio.appendChild(motoviajerolink);
    const elementoExistente2 = cambio.children[1];
    cambio.insertBefore(motoviajerocambio, elementoExistente2);
    //   `  ---------remover elemento(ser motoposada)-------`
    var elementomp = cambio.children[0];
    cambio.removeChild(elementomp);
    //--------------------------------------------------
    //---remocion de elementos en solicitudes---
    const solicitudesborr = document.querySelector('#quienes_somos')
    var elementos2 = solicitudesborr.children[1];
    solicitudesborr.removeChild(elementos2);

    //---remocion de elementos en comentarios---
    const comentariosborr = document.querySelector('#servicios')
    var elementos1 = comentariosborr.children[1]
    comentariosborr.removeChild(elementos1)
        //----creacion de comentario----------------




}