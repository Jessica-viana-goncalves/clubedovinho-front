const INPUT_CEP = document.getElementById('cep');
const INPUT_LOGRADOURO = document.getElementById('logradouro');
const INPUT_NUMERO = document.getElementById('numero');
const INPUT_BAIRRO = document.getElementById('bairro');
const INPUT_CIDADE = document.getElementById('cidade');
const INPUT_UF = document.getElementById('uf');

INPUT_CEP.addEventListener('blur', () => {
    if (INPUT_CEP.value.length !== 8) {
        return;
    }

    let url = `https://viacep.com.br/ws/${INPUT_CEP.value}/json/`;

    fetch(url)
    .then(res => res.json())
    .then(endereço => {
        INPUT_LOGRADOURO.value = endereço.logradouro;
        INPUT_BAIRRO.value = endereço.bairro;
        INPUT_CIDADE.value = endereço.localidade;
        INPUT_UF.   value = endereço.uf;
        INPUT_NUMERO.focus();
    });   
});