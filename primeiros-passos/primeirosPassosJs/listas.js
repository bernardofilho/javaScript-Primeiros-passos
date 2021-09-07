console.log(`Trabalhando com Listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDestinos.push(`Curitiba`); //adiciona um item na minha lista Array;

console.log("Destinos possíveis");
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDestinos);

listaDestinos.splice(1,1);
console.log(listaDestinos);

console.log(listaDestinos[1], listaDestinos[0]);