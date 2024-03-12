document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault()
var nome = document.getElementById('nome').value
var nota1 = parseInt(document.getElementById('nota1').value)
var nota2 = parseInt(document.getElementById('nota2').value)
var nota3 = parseInt(document.getElementById('nota3').value)

var media = Math.round((nota1 + nota2 +  nota3) / 3)

var resultado = document.getElementById('resultado')
var mensagem = document.getElementById('mensagem')

if (media > 70) {
    mensagem.innerText = `Parabéns ${nome}! Sua média é ${media}. Você está aprovado.`
}   else{
    mensagem.innerText = `Lamento ${nome}! Sua média é ${media}. Você está reporvado.`
}
resultado.style.display= 'block'
})