const botaoEnviar = document.getElementById('enviar');

function cancelaEnvio(evt) {
    evt.preventDefault();
}

botaoEnviar.addEventListener('click', cancelaEnvio)
