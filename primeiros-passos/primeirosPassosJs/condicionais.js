console.log(`Trabalhando com Condicionais`);
const listaDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhado = true;
const temPassagemComprada = true;
console.log("Destinos possíveis");
console.log(listaDestinos);

// if(idadeComprador >= 18){
//     console.log("Comprador Maior de idade");
//     listaDestinos.splice(1,1);//removendo item da lista;
// }else if(estaAcompanhado){
//     console.log("Comprador está acompanhado");
//     listaDestinos.splice(1,1);//removendo item da lista;
// }else{
//     console.log("Comprador Menor de Idade e não esta acompnhado, não posso vender");
// }


if(idadeComprador >= 18 || estaAcompanhado){
    console.log("Comprador Maior de idade");
    listaDestinos.splice(1,1);//removendo item da lista;
}else{
    console.log("Comprador Menor de Idade e não esta acompnhado, não posso vender");
}

console.log(listaDestinos);

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
} 