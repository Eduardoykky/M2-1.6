// parte 1 escopo

function comfirmarDados(nome) {
    var nomeCompleto = nome + " da Silva"
    var idade
    function getAnoNascimento() {
        idade = 20
        var ano = 2022 - idade
        return ano
    }
    console.log("Nome completo ", nomeCompleto)
    console.log("Ano de Nascimento ", getAnoNascimento())
    console.log("Idade ", idade)
}
comfirmarDados("Marcos")

// parte 2 var ler e const

function confirmarDados(nome) {
    let nomeCompleto = nome + " da Silva."
    var geracao =  "Millenium"
    function getAnoNascimento() {
        let idade = 40
        let ano = 2022 - idade
        return ano
    }
    let anoDeNascimento = getAnoNascimento()
    if (anoDeNascimento <= 1995) {
        geracao = "Geração X"
    }
    console.log("Nome completo: ", nomeCompleto)
    console.log("Ano de nascimento: ", anoDeNascimento)
    console.log("Geração: ", geracao)
}
confirmarDados("Marcos")

// parte 3 try...catch

try {
    function confirmarDados(nome) {
    var nomeCompleto = nome + " da Silva."
    function getAnoNascimento() {
        var idade = 40
        var ano = 2022 - idade
        return ano
    }
    console.log("Nome completo ", nomeCompleto)
    console.log("Ano de Nascimento ", getAnoNascimento())
    console.log("Idade ", idade)
}
confirmarDados("Marcos")
} catch (error) {
    console.log("Um erro foi encontrado e não foi possível concluir operação");
}

// parte 4 ffunction

function confirmarDados(nome, idade) {
    let nomeCompleto = nome + " da Silva."
    function getAnoNascimento() {
        var ano = 2022 - idade
        return ano
    }
    let anoDeNascimento = getAnoNascimento()
    function getGeracao(geracao) {
        if (anoDeNascimento <= 1995) {
            geracao = "Geração X"
        }
        return geracao
    }
    let geracao = getGeracao(getGeracao)
    console.log("Nome completo: ", nomeCompleto)
    console.log("Ano de nascimento: ", anoDeNascimento)
    console.log("Geração: ", geracao)
}
confirmarDados("Marcos", 40)