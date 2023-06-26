 //--------------login---------------------------
 function login() {
     const usu = document.getElementById('username').value;
     const pass = document.getElementById('password').value;
     if (usu == 'adso2556678' && pass == 'adso2023') {
         alert('inicio de sesion exitoso')
         window.location = 'inicio_usumv.html'

     } else {
         alert('usuario y/o contraseña incorrecta');
     }
 }
 //-------------------------------------------------
 const modal = document.querySelector('.sesion');
 const open_modal = document.querySelector('.centro');
 const modal_close = document.querySelector('.cerrar')
 modal.addEventListener('click', (z) => {
     z.preventDefault()

     open_modal.classList.add('centro_show')

 })

 modal_close.addEventListener('click', (z) => {
     z.preventDefault()

     open_modal.classList.remove('centro_show')

 })