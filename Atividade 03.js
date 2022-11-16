var pessoa = {
    nome: "Henrique Melo Leal",
    idade: 24,
    filiacao: [ "Marcos Antonio", "Patricia Leal"],
    endereco: {
                rua: "Av Mar Vermelho",
                cidade: "Cabedelo",
                estado: "Paraiba"
             },
        dadosCompletos: function () {
                if (this.nome == '')
                    return false;
        
                else if (this.idade == 0)
                    return false;
        
                else if (this.filiacao == '', '')
                    return false;
        
                else if (this.endereco.rua == '')
                    return false;
        
                else if (this.endereco.cidade == '')
                    return false;
                
                else if (this.endereco.estado == '')
                    return false;
                
                else
                    return true;        


    
}
}

var pessoa2 = {
    nome: "Rafael de Souza",
    idade: 33,
    filiacao: [ "Marcos Antonio", "Patricia Leal"],
    endereco: {
                rua: "Rua Mar Do Norte",
                cidade: "João Pessoa",
                estado: "Paraiba"
             },
            dadosCompletos: function () {
                if (this.nome == '')
                    return false;
        
                else if (this.idade == 0)
                    return false;
        
                else if (this.filiacao == '', '')
                    return false;
        
                else if (this.endereco.rua == '')
                    return false;
        
                else if (this.endereco.cidade == '')
                    return false;
                
                else if (this.endereco.estado == '')
                    return false;
                
                else
                    return true;      
        
    
}
}
var valor_atual = function(pessoa, pessoa2){

    console.log("Nome : ", pessoa.nome)
    console.log("Idade: ", pessoa.idade)
    console.log("Nome do Pai: "+ pessoa.filiacao[0] + ", Nome da Mãe: " + pessoa.filiacao[1])
    console.log("Rua: " + pessoa.endereco.rua + ", Cidade: " + pessoa.endereco.cidade + ", Estado: " + pessoa.endereco.estado)
    console.log('')

 

    console.log("Nome : ", pessoa2.nome)
    console.log("Idade: ", pessoa2.idade)
    console.log("Pai: "+ pessoa2.filiacao[0] + ", Mãe: " + pessoa2.filiacao[1])
    console.log("Rua: " + pessoa2.endereco.rua + ", Cidade: " + pessoa2.endereco.cidade + ", Estado: " + pessoa2.endereco.estado)
    console.log('')
 
    
    console.log("Os dados estão completos? " + pessoa.dadosCompletos())
}


valor_atual(pessoa, pessoa2)


