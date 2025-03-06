const SPAN_QUANTIDADE = document.getElementById('qtd');

let qtd = 0;

function alterarQuantidade(evento) {
    if (evento.checked === true) {
        qtd += 1;
    } else {
        qtd -= 1;
    }
   

    SPAN_QUANTIDADE.innerHTML = qtd;
}