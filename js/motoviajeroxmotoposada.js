//funcion de para hacer los cambios a motoposada
function motoposada() {
    const cambiomp = document.querySelector('.bienvenida').textContent = 'BIENVENIDO MOTOPOSADA';
    const solicitudes = document.querySelector('#quienes_somos h1').textContent = 'Solicitudes'
    const servicios = document.querySelector('#servicios h1').textContent = 'Comentarios'
        //--------------------lista----------------------------
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



}