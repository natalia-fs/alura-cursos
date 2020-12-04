const removeCliente = id => {
    if(confirm("Deseja realmente deletar o cliente?")){
        deletaCliente(id)
    }
}
const corpoTabela = document.querySelector("[data-conteudo-tabela]")

const exibeCliente = (cpf, nome, id) => {
    const linha = document.createElement('tr')

    const conteudoLinha = `
        <td>${cpf}</td>
        <td>${nome}</td>
        <button type="button" class="btn btn-danger" onclick="removeCliente(${id})" >Excluir</button>
    `

    linha.innerHTML = conteudoLinha;
    return linha
}

listarClientes().then( exibe => {
    exibe.forEach(index => {
        corpoTabela.appendChild(exibeCliente(index.cpf, index.nome, index.id))
    })  
})