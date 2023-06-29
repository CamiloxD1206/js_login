 //--------------login---------------------------
 function login() {
     const usu = document.getElementById('username').value;
     const pass = document.getElementById('password').value;

     if (usu.trim() === '' || pass.trim() === '') {
         alert('No se permiten espacios en blanco');
     } else if (usu !== 'adso2556678' && pass !== 'adso2023') {
         alert('usuario y/o contraseña incorrecta');
     } else {
         alert('inicio de sesion exitoso')
         window.location = 'inicio_usumv.html'



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