var Toastify = require('toastify-js')


const button = document.getElementById('botoin');

button.addEventListener('click', function (event) {

    Toastify({ text: "Minha notificação de teste 🏆🏆!", duration: 3000, close: true, gravity: "top", position: "right", stopOnFocus: true, style: { background: "linear-gradient(to right, #00b09b, #96c93d)", }, }).showToast();
});