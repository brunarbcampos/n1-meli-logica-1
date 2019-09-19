/**
 * Solicite que o usuário digite um número. Informe então se este número é par ou ímpar.
 */



const numero = parseInt(prompt("Digite um numero"))
if(numero%2 == 0){
	alert(`${numero} é Par`)
}else{
	alert(`${numero} é Impar`)
}
