function enviar() {
    event.preventDefault();

let input_nome = document.getElementById('nome');
let input_desc = document.getElementById('descricao');

if (input_nome.value == '') {
input_nome.style.border = '1px solid red';
document.getElementById('erro_nome').style.display = 'block';

}

}


