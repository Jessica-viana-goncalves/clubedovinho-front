const TABLE = document.getElementById('table-countries');

let dados = [
    {
        id: 1,
        nome: 'Brasil',
        bandeira: '🇧🇷',
    },
    {
        id: 2,
        nome: 'Portugal',
        bandeira: '🇵🇹',
    },
    {
        id: 3,
        nome: 'França',
        bandeira: '🇫🇷',
    },
    {
        id: 4,
        nome: 'Espanha',
        bandeira: '🇪🇸',
    },
]

dados.forEach((country) => {

    TABLE.innerHTML += `
    <tr>
         <td>${country.id}</td>
         <td>${country.bandeira} ${country.nome}</td>
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

