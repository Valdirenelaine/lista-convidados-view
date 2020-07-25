async function buscarPorCep(cep) {
    try {

        let resposta = await fetch(`https://viacep.com.br/ws/${cep.replace('.','').replace('-','')}/json/`)
        let resultado = await resposta.json()
        if (resultado.erro) throw {
            mensagemCliente: "CEP não Reconhecido",
            message: "CEP não reconhecido"
        }
        return {
            cep: resultado.cep,
            logradouro: resultado.logradouro,
            bairro: resultado.bairro,
            cidade: resultado.localidade,
            estado: resultado.uf

        }


    } catch (erro) {
        throw {
            message: `[EnderecoService]->buscarPorCep: Erro ao buscar Endereço: ${erro.message}`,
            mensagemCliente: erro.mensagemCliente || "Erro ao buscar Endereço"
        }
    }
}

export { buscarPorCep }