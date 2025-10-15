function ordenarNumeros() {
    let arr = []
    for (let i = 1; i <= 20; i++) arr.push(i)

    let crescente = [...arr]
    let decrescente = [...arr].reverse()

    document.getElementById('res5').innerHTML = `Crescente: ${crescente.join(', ')}<br>Decrescente: ${decrescente.join(', ')}`
}


function bubbleSort() {
    let arr = []
    function gerarAleat(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
    for (let i = 0; i < 10; i++) arr.push(gerarAleat(1, 20))
    let original = [...arr]

    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - j - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let val = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = val
            }
        }
    }

    document.getElementById('res6').innerHTML = `Original: ${original.join(', ')}<br>Ordenado: ${arr.join(', ')}`
}


function somarNumeros() {
    let arr = []
    function gerarAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
    for (let i = 0; i < 10; i++) arr.push(gerarAleatorio(1, 220))

    let soma = 0
    for (let i = 0; i < arr.length; i++) soma += arr[i]

    document.getElementById('res7').innerHTML = `Números: ${arr.join(', ')}<br>Soma total: ${soma}`
}


function gerarMatriz() {
    let mat = []
    function gerarAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    for (let i = 0; i < 3; i++) {
        mat[i] = []
        for (let j = 0; j < 3; j++) {
            mat[i][j] = gerarAleatorio(1, 20)
        }
    }

    let tabela = mat.map(linha => linha.join(' | ')).join('<br>')
    document.getElementById('res8').innerHTML = `<pre>${tabela}</pre>`
}


function calcularIMC() {
    let peso = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)

    let imc = peso / (altura * altura)

    let situacao = ''
    if (imc < 18.5) situacao = 'Abaixo do peso'
    else if (imc < 25) situacao = 'Peso normal'
    else if (imc < 30) situacao = 'Sobrepeso'
    else situacao = 'Obesidade'

    document.getElementById('res9').innerHTML = `IMC: ${imc.toFixed(2)} (${situacao})`
}


function converterTemp() {
    let tipo = document.getElementById('tipo').value.toUpperCase()
    let temperatura = Number(document.getElementById('temp').value)
    let resultado = 0

    switch(tipo) {
        case 'C':
            resultado = (temperatura - 32) * (5/9)
            document.getElementById('res10').innerHTML = `A temperatura em Celsius é: ${resultado.toFixed(2)} °C`
            break
        case 'F':
            resultado = (temperatura * (9/5)) + 32
            document.getElementById('res10').innerHTML = `A temperatura em Farenheit é: ${resultado.toFixed(2)} °F`
            break
        default:
            document.getElementById('res10').innerHTML = 'Digite apenas C ou F'
    }
}

function buscaLinear() {
    let arr = []
    for (let i = 0; i < 10; i++) arr.push(Math.floor(Math.random() * 50) + 1)
    let alvo = arr[Math.floor(Math.random() * arr.length)]
    let posicao = -1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === alvo) {
            posicao = i
            break
        }
    }
    document.getElementById('res11').innerHTML = `Array: ${arr.join(', ')}<br>Procurando: ${alvo}<br>Encontrado na posição: ${posicao}`
}