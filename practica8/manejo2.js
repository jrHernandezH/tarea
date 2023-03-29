let bd1 = 0;
let bd2 = 0;
let bd3 = 0;
let bdm = 0;
let bdt = 0;
let resultadoFinal = null;
const banda1Color = document.getElementById("banda1ColorF");
const banda2Color = document.getElementById("banda2ColorF");
const banda3Color = document.getElementById("banda3ColorF");
const multiplicadorColor = document.getElementById("multiplicadorColorF");
const toleranciaColor = document.getElementById("toleranciaColorF");
const resultadoDiv = document.getElementById("resultadoCF");
const colores = [
    "#000",//.
    "#3F2212",//.
    "#FF0000",//.
    "#FF8000",//.
    "#FFFF00",//.
    "#008000",//.
    "#0000FF",//.
    "#4c2882",//.
    "#808080",//.
    "#fff",//.
    "#efb810",
    "#BEBEBE"
];
const toleranciaDeColores = [
    "1%",
    "2%",
    ".50%",
    ".250%",
    ".10%",
    ".05%",
    "5%",
    "10%"
]
const coloresReservados = [
    "#3F2212",
    "#FF0000",
    "#008000",
    "#0000FF",
    "#4c2882",
    "#808080",
    "#efb810",
    "#BEBEBE"
]

const dibujarf = () => {
    const banda1 = document.getElementById("banda1F").value;
    const banda2 = document.getElementById("banda2F").value;
    const banda3 = document.getElementById("banda3F").value
    const multiplicador = document.getElementById("MultiplicadorF").value;
    bd1 = parseInt(banda1);
    bd2 = parseInt(banda2);
    bd3 = parseInt(banda3);
    bdm = parseInt(multiplicador);
    //empieza a dibujar
    banda1Color.style.background = colores[bd1];
    banda2Color.style.background = colores[bd2];
    banda3Color.style.background = colores[bd3];
    multiplicadorColor.style.background = colores[bdm];
}
const calcularf = () => {
    const tolerancia = document.getElementById("toleranciaF").value;
    bdt = parseInt(tolerancia);

    toleranciaColor.style.background = coloresReservados[bdt];
    //jsExample
    const valorNominal = bd1 * 10 + bd2;
    const factorMultiplicativo = 10 ** bd3;

    const resultado = valorNominal * factorMultiplicativo;
    const cResult = resultado + " " + " ohms " + toleranciaDeColores[bdt];
    if (resultadoFinal !== null) {
        resultadoDiv.removeChild(resultadoFinal);
    }
    resultadoFinal = document.createElement("span");
    resultadoFinal.textContent = `El valor de esta resistencia es de: ${cResult}.`;
    resultadoDiv.appendChild(resultadoFinal);

}