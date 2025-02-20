const TABLE = document.getElementById('table-categories');

let dados = [
    {
        id: 1,
        nome: 'Espumantes',
        descricao: 'Desc do espumante',
    },
    {
        id: 2,
        nome: 'Brancos',
        descricao: 'Vinho de uvas brancas',
    },
    {
        id: 3,
        nome: 'Verdes',
        descricao: 'Vinho de uvas verdes, exclusivamente de Portugal',
    },
    {
        id: 4,
        nome: 'Tinto',
        descricao: 'Vinho de uvas roxas',
    },
]

dados.forEach(addLinha);

function addLinha(categoria) {

    TABLE.innerHTML += `
    <tr>
         <td>${categoria.id}</td>
         <td>${categoria.nome}</td>
         <td>${categoria.descricao}</td>
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

}

