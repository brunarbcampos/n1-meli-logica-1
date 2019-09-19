/*
Escrever um algoritmo que leia dois valores inteiro distintos e informe qual deles é o maior.
 */










const numero1 = parseInt(prompt("Digite um número"))
const numero2 = parseInt(prompt("Digite um número"))

if (numero1 > numero2) {
    alert(`${numero1} é maior que ${numero2}`)
} else {
        alert(`${numero2} é maior que ${numero1}`)
    }