const TABLE = document.getElementById('table-products');

let dados = [
    {
        id: 1,
        nome: 'Quinta do Morgado',
        categoria: 'Tinto Suave',
        imagem:'https://www.vinhosevinhos.com/media/catalog/product/cache/f551083cd20de7ac8cf7d25adc91480d/q/u/quinta-do-morgado-tinto-suave.jpg',
        quantidade: '10',
        valor: '10,90',
    },
    {
        id: 2,
        nome: 'Dom Bento',
        categoria: 'Tinto Suave',
        imagem:'https://cdn.awsli.com.br/1958/1958204/produto/203245775/screenshot_20230223_190651_instagram-pamtvr.jpg',
        quantidade: '24',
        valor: '8,90',
    },
    {
        id: 3,
        nome: 'Salton',
        categoria: 'Vinho espumante',
        imagem:'data:image/jpeg;base64,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',
        quantidade: '10',
        valor: '32,21',
    },

]

dados.forEach((product) => {
    TABLE.innerHTML += `
    <tr>
         <td>${product.id}</td>
         <td>${product.nome}</td>
         <td>${product.categoria}</td>
         <td> <img onclick="abrirModal('${product.nome}','${product.imagem}')" data-bs-toggle="modal" data-bs-target="#exampleModal"
        src="${product.imagem}" width="100px"</td>
         <td>${product.quantidade}</td>
         <td>${product.valor}</td>
         <td>
            <a href="#" class="btn btn-outline-warning btn-sm">
                Editar
            </a>
            <a href="#" class="btn btn-outline-danger btn-sm">
                Excluir
            </a>
        </td>
    </tr>    
`;
});

function abrirModal(nome,imagem) {
    document.getElementById('modal_product_nome').innerHTML = nome;
    document.getElementById('modal_product_body').innerHTML =`<img src="${imagem}" width="100%">`;
}


