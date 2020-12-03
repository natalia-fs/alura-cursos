const corpoTabela = document.querySelector("[data-conteudo-tabela]")

const exibeCliente = (cpf, nome) => {
    const linha = document.createElement('tr')

    const conteudoLinha = `
        <td>${cpf}</td>
        <td>${nome}</td>
    `

    linha.innerHTML = conteudoLinha;
    return linha
}

listarClientes().then( exibe => {
    exibe.forEach(index => {
        corpoTabela.appendChild(exibeCliente(index.cpf, index.nome))
    })  
})