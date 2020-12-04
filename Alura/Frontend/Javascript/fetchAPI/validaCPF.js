function verificaCPFInvalido(cpf){
    const cpfsInvalidos = [
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
        "00000000000",
    ]
    return cpfsInvalidos.indexOf(cpf) === -1
}

function somaNumerosCPF(cpf, totalDigitos, peso){
    let soma = 0
    for(let index = 1; index <= totalDigitos; index++){
        soma += parseInt(cpf.substring(index -1, index)) * (peso - index)
    }
    return soma
}

function verificaDigito(cpf, totalDigitos, peso, digitoVerificacao){
    const soma = somaNumerosCPF(cpf, totalDigitos, peso)
    const resto = (soma * 10) % 11
    return resto === digitoVerificacao
}

function verificaPrimeiroDigito(cpf){
    const peso = 11
    const totalDeDigitosPrimeiraParte = 9
    const digitoDeVerificacao = parseInt(cpf.substring(9, 10))

    return verificaDigito(
        cpf,
        totalDeDigitosPrimeiraParte,
        peso,
        digitoDeVerificacao
    )
}

function verificaSegundoDigito(cpf){
    const peso = 12
    const totalDeDigitosSegundaParte = 10
    const digitoDeVerificacao = parseInt(cpf.substring(10, 11))

    return verificaDigito(
        cpf,
        totalDeDigitosSegundaParte,
        peso,
        digitoDeVerificacao
    )
}

function validaCPF(cpf){
    return(
        verificaCPFInvalido(cpf) && verificaPrimeiroDigito(cpf) && verificaSegundoDigito(cpf)
    )
}