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
    //Informo se o numero foi maior ou menor
    if(num > sorte){
        alert('O número é maior do que o digitado')
    } else {
        alert('O número é menor do que o digitado')
    }
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

