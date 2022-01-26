document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
});

const nome = document.getElementById('nome')
const idade = document.getElementById('idade')

const raioCirculo = document.getElementById('circulo')
const baseCubo = document.getElementById('cubo')
const baseTrapezio1 = document.getElementById('baseTrapezio1')
const baseTrapezio2 = document.getElementById('baseTrapezio2')
const alturaTrapezio = document.getElementById('alturaTrapezio')
const valorMath = document.getElementById('valorMath')

const circunCirculo = document.getElementById('circunferenciaCirculo')
const aCirculo = document.getElementById('areaCirculo')
const aCubo = document.getElementById('areaCubo')
const vCubo = document.getElementById('volumeCubo')
const aTCubo = document.getElementById('areaTotalCubo')
const aLCubo = document.getElementById('areaLateralCubo')
const aTrapezio = document.getElementById('areaTrapezio')
const mTrunc = document.getElementById('mathTrunc')

document.getElementById('enviar').addEventListener('click', function (event) {

    window.alert(`${nome.value} \nSua idade em meses: ${calcularIdade(idade.value, 'meses')} meses.\nSua idade em dias: ${calcularIdade(idade.value, 'dias')} dias.\nSua idade em horas: ${calcularIdade(idade.value, 'horas')} horas.
    `)

    circunCirculo.innerHTML = circunferenciaCirculo(raioCirculo.value)
    aCirculo.innerHTML = areaCirculo(raioCirculo.value)
    aCubo.innerHTML = areaCubo(baseCubo.value)
    vCubo.innerHTML = volumeCubo(baseCubo.value)
    aTCubo.innerHTML = areaTotalCubo(baseCubo.value)
    aLCubo.innerHTML = areaLateralCubo(baseCubo.value)
    aTrapezio.innerHTML = areaTrapezio(baseTrapezio1.value, baseTrapezio2.value, alturaTrapezio.value)
    mTrunc.innerHTML = removerDecimais(valorMath.value)

})

document.getElementById('random').addEventListener('click', function (event) {

    window.alert(`Seu número aleatório é: ${random()}`)

})

function calcularIdade(a, b) {
    let meses = a * 12
    let dias = a * 365
    let horas = a * 8760

    switch (b) {
        case "meses":
            return meses
            break;
        case "dias":
            return dias
            break;
        case "horas":
            return horas
            break;

        default:
            break;
    }

}

function circunferenciaCirculo(a) {
    return 2 * Math.PI.toFixed(2) * a
}
function areaCirculo(a) {
    return Math.PI.toFixed(2) * a
}
function areaCubo(a) {
    return Math.pow(a, 2)
}
function volumeCubo(a) {
    return Math.pow(a, 3)
}
function areaTotalCubo(a) {
    return a * 6
}
function areaLateralCubo(a) {
    return 4 * Math.pow(a, 2)
}
function areaTrapezio(a, b, c) {
    return (((a + b) * c) / 2)
}
function removerDecimais(a) {
    return Math.trunc(a)
}
function random() {
    return Math.trunc(Math.round(Math.random() * 10))
}