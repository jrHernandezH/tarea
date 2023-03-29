let bd1 = 0;
let bd2 = 0;
let bdm = 0;
let bdt = 0;
let resultadoFinal = null;
const banda1Color = document.getElementById("banda1Color");
const banda2Color = document.getElementById("banda2Color");
const multiplicadorColor = document.getElementById("multiplicadorColor");
const toleranciaColor = document.getElementById("toleranciaColor");
const resultadoDiv = document.getElementById("resultadoC");
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

const dibujar = () => {
    const banda1 = document.getElementById("banda1").value;
    const banda2 = document.getElementById("banda2").value;
    const multiplicador = document.getElementById("Multiplicador").value;
    bd1 = parseInt(banda1);
    bd2 = parseInt(banda2);
    bdm = parseInt(multiplicador);
    //empieza a dibujar
    banda1Color.style.background = colores[bd1];
    banda2Color.style.background = colores[bd2];
    multiplicadorColor.style.background = colores[bdm];
}
const calcular = () => {
    const tolerancia = document.getElementById("tolerancia").value;
    bdt = parseInt(tolerancia);

    toleranciaColor.style.background = coloresReservados[bdt];
    const multiplicador = 10 ** bdm;
    const resultado = (bd1 * 10 + bd2) * multiplicador;
    const cResult = resultado + " " + " ohms " + toleranciaDeColores[bdt];
    if (resultadoFinal !== null) {
        resultadoDiv.removeChild(resultadoFinal);
    }
    resultadoFinal = document.createElement("span");
    resultadoFinal.textContent = `El valor de esta resistencia es de: ${cResult}.`;
    resultadoDiv.appendChild(resultadoFinal);

}
//manejo de navegacion
function myFunction(idButton) {
    var producto1 = document.getElementById('producto1');
    var producto2 = document.getElementById('producto2');
    var producto3 = document.getElementById('producto3');



    switch (idButton) {
        case 1:

            producto1.style.display = 'block';
            producto2.style.display = 'none';
            producto3.style.display = 'none';
            break;

        case 2:
            producto1.style.display = 'none';
            producto2.style.display = 'block';
            producto3.style.display = 'none';
            break;

        case 3:
            producto1.style.display = 'none';
            producto2.style.display = 'none';
            producto3.style.display = 'block';
            break;

        default:
            alert("hay un problema: No existe el producto.")
    }

}

