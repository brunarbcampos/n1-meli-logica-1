/**Escreva um programa que sorteia um número de 1 a 10 e dá duas chances para que o usuário acerte.

1.1. Escreva um programa que sorteia um número de 1 a 10, dá duas chances para que o usuário acerte, mas informa se o número sorteado é maior ou menor que o primeiro palpite.

1.2. Faça o mesmo programa anterior, agora com 3 palpites.

INICIO
num = numero recebido do user
sorte =  numero randomico

se num == sorte
  retorna Parabnéns, você acertou!
senão
  num2 = numero recebido do user
  se num2 == sorte
  retorna Parabnéns, você acertou!
  senão
  retorna Não foi dessa vez!

  FIM
  */

  //aqui eu pego o numero do user

const num = parseInt(prompt('Digite um numero de 1 a 10'));

//aqui eu gero numero randomico
const sorte = Math.floor(Math.random()*10+1);
console.log('sorte fora do if e else: ', sorte)

//verifico pela primeravez que ele acertou 
if(num == sorte){
    alert(`Parabéns você acertou! O número é ${num}`)
}
//verifico pela segunda vez
else{
    //dou mais uma chance ao usuario
    const num2 = parseInt(prompt('Digite um numero de 1 a 10'));
    console.log('sorte dentro else: ', sorte)

    //verifico se ele acertou dessa vez
    if(num2 == sorte){
        alert(`Parabéns você acertou! O número é ${sorte}`)
    }
    // o usuario errou nas duas tentivas
    else{
        alert('não foi dessa vez :(')
    }

}

//Informo se o numero foi maior ou menor
if(num > sorte){
    alert('O número é maior do que o digitado')
} else {
    alert('O número é menor do que o digitado')
}