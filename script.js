// questão 01

let idade = 20
console.log(idade)

// questão 02

var frutas = ["maça", "banana", "laranja", "uva"];
for (let i=0; i < frutas.length; i++)
    console.log(frutas[i]);

// questão 03 

var frutas = ["maça", "banana", "laranja", "uva"];
console.log(frutas[2])

// questão 04



function calarea(num1) {
    let area = num1**2
    console.log(`a área do quadrado de lado ${num1} é ${area}m2`)
}
 
calarea(4)

// questão 05

let A = 5
let B = 10
let C = 20

soma = A + B 
if (soma < C) {
    console.log(` a soma entre os numeros ${A} e ${B} é igual a ${soma} e  ${soma} é menor que ${C}`)
} else {
    console.log(` a soma entre os numeros ${A} e ${B} é igual a ${soma} e  ${soma} é maior que ${C}`)
}

// questão 06 

var  num = "5";
var soma = num + 10;
console.log(soma) // O resultado concatenado é 510

// questão 07

let nume1 = 10
let nume2 = 20
let som = nume1 + nume2
let mul = nume1 * nume2

if (nume1 == nume2) {
    console.log(som)
}else if (nume1 != nume2) {
    console.log(mul)
}

// questão 08 

for (var contador = 0; contador < 5; contador ++) {
    //
}
console.log(contador);

// se trocar para let tem que definir a variavel

// questão 09 


function antesuc(x)  {
    console.log(`o antecessor de ${x} é ${x-1}`)
    console.log(`o sucessor de ${x} é ${x+1}`)
}


// questão 10

var x = 10

function minhaFuncao(x, y) {
    var y = 5
    console.log()
}

minhaFuncao()

//Não aparece nada na saída

//questão 11

var numero = "5"

if (numero === 5) {
    console.log("o número é igual a 5")
}else if (numero == 5 ) {
    console.log("o número é igual a 5, com a conversão de tipo")
} else {
    console.log("o número não é igual a 5")
}

//Saída: "o número é igual a 5, com a conversão de tipo"


// 12

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const novoArray = []

array.forEach(function(numero) {
    if (numero % 2 == 0) {
        novoArray.push(numero)
    }
})

console.log(novoArray)

// questão 13 

let n1 = 10
let n2 = 5.5
let n3 = 4.9

function calMedia (n1, n2, n3) {
    calMedia = (n1 + n2 + n3)/3
    if (calMedia >= 7) {
        console.log(`Média ${calMedia.toFixed(1)}, resultado: Aprovado.`)
    } else if (calMedia >= 5 && calMedia < 7) {
        console.log(`Média ${calMedia.toFixed(1)}, resultado: Recuperação.`)
    } else {
        console.log(`Média ${calMedia.toFixed(1)}, resultado: Reprovado.`)
    }
}

calMedia(n1, n2, n3)
 

// OU 
/*
function calcMedia (n1, n2, n3) {
    calcMedia = (n1 + n2 + n3)/3
    return media
}

let minhamedia = calcMedia(7, 8, 5)

if (minhamedia >= 7) {
    console.log(`Média ${calMedia.toFixed(1)}, resultado: Aprovado.`)
} else if (calMedia >= 5) {
    console.log(`Média ${calMedia.toFixed(1)}, resultado: Recuperação.`)
} else {
    console.log(`Média ${calMedia.toFixed(1)}, resultado: Reprovado.`)
}
    
*/
//14

let altura = 1.70
let peso  = 60

function calIMC (altura, peso) {
    calIMC = peso/(altura**2)
    if (calIMC <= 18.5) {
        console.log(`Seu IMC é ${calIMC.toFixed(0)}, resultado: Abaixo do Peso`)
    } else if (calIMC >= 18.5 && calIMC <=25) {
        console.log(`Seu IMC é ${calIMC.toFixed(0)}, resultado: Peso Ideal`)
    } else if (calIMC > 25 && calIMC <=30) {
        console.log(`Seu IMC é ${calIMC.toFixed(0)}, resultado: Sobrepeso`)
    } else if (calIMC > 30 && calIMC <=40) {
        console.log(`Seu IMC é ${calIMC.toFixed(0)}, resultado: Obesidade`)
    } else if (calIMC > 40) {
        console.log(`Seu IMC é ${calIMC.toFixed(0)}, resultado: Obesidade Mórbida`)
    }
}
calIMC(altura, peso)

//15

let valor = prompt("Digite um valor para a tabuada: ")

function Tabuada(valor) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${valor} X ${i} = ${valor * i}`)
    }
}

Tabuada(valor)

// 16

/*
let numero1 = 20
let numero2 = 5
let div = numero1/numero2


    if (numero2 == 0){
    console.log("numero igual a 0")
} 
else  throw new RangeError('dfjghdfjg')


// OU

let num1 = 10
let num2 = 10

function divisão(x, y) {
    try {
        if (y == 0) {
            throw Error ("zero não é permitido")
        } else {
            console.log(x/y)
        }
    } catch (error) {
        console.error(error)
    }
}

divisão(num1, num2)

*/ 
//  17




function CalViagem(distanciapercorrida) {

    let kmL = 9.8
    let litro = 5.24
    let distanciaCompleta = distanciapercorrida * 2 
    let litroTotal = distanciaCompleta / kmL
    let valorTotal = litroTotal * litro
    let resultado = valorTotal 

    console.log(`Para fazer ${distanciapercorrida}kms você deve abastecer R$${resultado.toFixed(2)}`)
}

CalViagem(2900)

// 18



function CalFatorial(fatorial) {
    let valorFactorial = 1
    for (let i = 1; i <= fatorial; i++) {
        valorFactorial *= i;
    }
    console.log(`O fatorial de ${fatorial} é ${valorFactorial}`)
}

CalFatorial(2)

// 19 

function somatorioArray(array) {
    let newArray = [];
    
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] + 7)
    }
    console.log(newArray) 
}

let Array = [12, 36, 52, 77];
somatorioArray(Array)

// 20

let Identidade = false
let Motorista = false

if (Identidade || Motorista){
    console.log("pode fazer prova")
} else {
    console.log("não pode fazer prova")
}

// 21

var frutas = ["maça", "banana", "laranja"]
console.log(frutas[3])

// saída : undefined