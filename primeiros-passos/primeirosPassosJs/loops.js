console.log(`\n Trabalhando com Condicionais`);
const listaDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis:");
console.log(listaDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
let destinoExiste = false;
while (contador<3) {
    
    if (listaDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino Disponível: ", destinoExiste);

if (podeComprar && destinoExiste){
    console.log("Boa Viagem!!");
}else{
    console.log("Desculpe tivemos um erro");
}

for (let i; i < 3; i++) {
    
    if (listaDestinos[i] == destino){
        destinoExiste = true;
        break;
    }
}
