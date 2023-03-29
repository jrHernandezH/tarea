let bd1 = 0;
let bd2 = 0;
let bd3 = 0;
let bdm = 0;
let bdt = 0;
let bdp = 0;
let resultadoFinal = null;
const banda1Color = document.getElementById("banda1ColorF");
const banda2Color = document.getElementById("banda2ColorF");
const banda3Color = document.getElementById("banda3ColorF");
const multiplicadorColor = document.getElementById("multiplicadorColorF");
const toleranciaColor = document.getElementById("toleranciaColorF");
const ppmColor = document.getElementById("ppmColorF");
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
const ppmValores = [
    100,
    50,
    15,
    25,
    10,
    5
]
const ppmColores = [
    "#3F2212",//.
    "#FF0000",//.
    "#FF8000",//.
    "#FFFF00",//.
    "#0000FF",//.
    "#4c2882"//
]
const dibujarf = () => {
    const banda1 = document.getElementById("banda1F").value;
    const banda2 = document.getElementById("banda2F").value;
    const banda3 = document.getElementById("banda3F").value;
    const multiplicador = document.getElementById("MultiplicadorF").value;
    const tolerancia = document.getElementById("toleranciaF").value;
    bd1 = parseInt(banda1);
    bd2 = parseInt(banda2);
    bd3 = parseInt(banda3);
    bdm = parseInt(multiplicador);
    bdt = parseInt(tolerancia);
    //empieza a dibujar
    banda1Color.style.background = colores[bd1];
    banda2Color.style.background = colores[bd2];
    banda3Color.style.background = colores[bd3];
    multiplicadorColor.style.background = colores[bdm];
    toleranciaColor.style.background = coloresReservados[bdt];
}
const calcularf = () => {
    const ppm = document.getElementById("PPM").value;
    bdp = parseInt(ppm);
    ppmColor.style.background = ppmColores[bdp];
    const resultado = (bd1 * 100 + bd2 * 10 + bd3) * Math.pow(10, bdm);
    console.log(bdp)
    const cResult = resultado + " " + " ohms " + toleranciaDeColores[bdt] + " " + ppmValores[bdp] + " ppm";

    //division de respuesta
    if (resultadoFinal !== null) {
        resultadoDiv.removeChild(resultadoFinal);
    }
    resultadoFinal = document.createElement("span");
    resultadoFinal.innerHTML = `El valor de esta resistencia es de: <br> ${cResult}.`;
    resultadoDiv.appendChild(resultadoFinal);

}