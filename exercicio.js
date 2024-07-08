
// 01
/*let nome = prompt("Qual o seu nome? ")

const novo_nome = document.createElement('h1')
novo_nome.innerHTML = `Seja bem Vindo(a), ${nome}!👋`
document.querySelector('body').appendChild(novo_nome)

// 02

function ligar() {
<<<<<<< HEAD
    document.getElementById('lampada').src = 'acesa.png'
    document.getElementById('fundo').style.background = "white"
    document.getElementById('h1').style.color = "black"
=======
    document.getElementById('lampada').src = 'lampada_acesa.jpg'
>>>>>>> 752bdbbcffac250ef002af41b4e91e7a12c31905
}

function desligar() {
    document.getElementById('lampada').src = 'apagada.png'
    document.getElementById('fundo').style.background = "black"
    document.getElementById('h1').style.color = "white"
}

OU

const btn_onoff = document.querySelector('#btn-onoff')
const lampada  = document.querySelector('#lamp')
const icone-onoff = document.querySelector('#icon-onoff')
const body = document.query.Selector('body')

let ligado = true

btn_onoff.addEventListener('click', () =>) {
    if (ligado) {
        lampada.src = "apagada.png"
        icone_onoff.innerHTML = 'toggle_off'
        body.style.baclgroundColor = "black"
        body.style.color = 'white'
        icone_onoff.style.color = 'white'
        ligado = false
    } else {
        lampada.src = "acesa.png"
        icone_onoff.innerHTML = 'toggle_on'
        body.style.baclgroundColor = "white"
        body.style.color = 'black'
        icone_onoff.style.color = 'black'
        ligado = false
     }
})
*/

// 03 


/*
document.getElementById('olho').addEventListener('click', function() {
    document.getElementById('senha').type = 'password';
})


document.getElementById('olho').addEventListener('mousedown', function() {
    document.getElementById('senha').type = 'text';

})
*/
// OU

const ipt_senha = document.querySelector('.senha')
const molho = document.querySelector('.btn-olho')
const icn_olho = document.querySelector('.icon-olho')

let visivel = false

molho.addEventListener('click', () => {
    if (visivel) {
        ipt_senha.type = 'password'
        icn_olho.src = "olhofec.png"
        visivel = false 
    } else {
        ipt_senha.type = 'text'
        icn_olho.src = 'olho.png'
        visivel = true
    }
})