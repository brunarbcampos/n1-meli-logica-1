/** Altere o exercício anterior de forma que ele informe também se os números são iguais.

 */

const numero1 = parseInt(prompt("Digite um número"))
const numero2 = parseInt(prompt("Digite um número"))

if (numero1 > numero2) {
    alert(`${numero1} é maior que ${numero2}`)
} else {
    if (numero1 === numero2) {
        alert(`${numero1} é igual a ${numero2}`)
    } else {
        alert(`${numero1} não é maior que ${numero2} e nem igual a ${numero2}`)
    }
}