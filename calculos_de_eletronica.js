function calcularOhm() {
    let R = parseFloat(document.getElementById("resistencia").value);
    let I = parseFloat(document.getElementById("corrente").value);
    let resultado = "";

    if (!isNaN(R) && !isNaN(I)) {
        let V = R * I;
        resultado = `O valor da Tensão = ${V.toFixed(2)} V (V = R × I)`;
    } else {
        resultado = "Preencha os dois campos!";
    }

    document.getElementById("resultadoOhm").innerText = resultado;
}

function calcularPot() {
    let V = parseFloat(document.getElementById("tensaoPot").value);
    let I = parseFloat(document.getElementById("correntePot").value);
    let resultado = "";

    if (!isNaN(V) && !isNaN(I)) {
        let P = V * I;
        resultado = ` O valor da Potência = ${P.toFixed(2)} W (P = V × I)`;
    } else {
        resultado = "Preencha os dois campos!";
    }

    document.getElementById("resultadoPot").innerText = resultado;
}

function lerSensor() {
    let valor = parseInt(document.getElementById("valorSensor").value);
    let resultado = "";

    if (isNaN(valor) || valor < 0 || valor > 1023) {
        resultado = "Digite um valor válido entre: (0 a 1023).";
    } else if (valor < 400) {
        resultado = `Valor: ${valor} → Ambiente escuro (LED aceso).`;
    } else {
        resultado = `Valor: ${valor} → Ambiente claro (LED apagado).`;
    }

    document.getElementById("resultadoSensor").innerText = resultado;
}