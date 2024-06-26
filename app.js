let randomNum = gerarRandomNum()
let tentativas = 0
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

exibirMsgInicial()

function exibirMsgInicial(){
exibirTextoNaTela('h1', 'Jogo do Adivinhamento')
exibirTextoNaTela('p', 'Escolha um número de 1 a 10')
}

function reiniciarJogo() {
    randomNum = gerarRandomNum()
    limparCampo()
    tentativas = 0
    exibirMsgInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}

function gerarRandomNum(){
    return parseInt(Math.random() * 10 + 1)
    console.log(randomNum)
}

function verificarChute() {
    tentativa = false
    let chute = document.querySelector('input').value
    if (chute == randomNum){
        tentativas = tentativas + 1
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        exibirTextoNaTela('h1', 'Você venceu!')
        exibirTextoNaTela('p', `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`) 
        tentativa = true
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        exibirTextoNaTela('h1', 'Você não acertou :/')
        if (chute < randomNum) {
            exibirTextoNaTela('p', 'O valor secreto é maior')
            
        } else {
            exibirTextoNaTela('p', 'O valor secreto é menor')
        }
      tentativas = tentativas + 1  
    }

}