const informacoesClientes = [
    {
        cpf: 17744574189,
        nome: "Jane"
    },
    {
        cpf: 58844524189,
        nome: "Joe"
    },
]

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

informacoesClientes.forEach(index => {
    corpoTabela.appendChild(exibeCliente(index.cpf, index.nome))
})