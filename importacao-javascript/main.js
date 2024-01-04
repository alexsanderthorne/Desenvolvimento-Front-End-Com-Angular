const {gets, print} = require('./funcoes-auxiliares')

const numerosSorteados = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < numerosSorteados; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado;
    }
    
}

print(maiorValorEncontrado);