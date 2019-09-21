

let cont, Nome, NovoNome, Altura, NovaAltura;
NovaAltura = 0;
NovoNome = "";
cont = 0

while (cont < 5){
    nome = prompt("Digite o nome do atleta:")
    altura = parseFloat(prompt("Digite a altura do atleta:"))

    if (Altura > NovaAltura){
        NovoNome = Nome;
        NovaAltura = Altura;
    }
    cont++;
}
document.write (`${NovoNome} é atleta de maior altura com ${NovaAltura} metros. A média das alturas é de ${xxxxxxxxx} metros`)
