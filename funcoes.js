function calcular() {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const operacao = document.getElementById('operacao').value;
    let resultado;

    switch (operacao) {
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case '*':
            resultado = n1 * n2;
            break;
        case '/':
            if (n2 === 0) {
                resultado = "Erro: Divisão por zero!";
            } else {
                resultado = n1 / n2;
            }
            break;
        default:
            resultado = "Operação inválida";
    }

    document.getElementById('resultado').textContent = `Resultado: ${resultado} (Operação: ${operacao})`;
}




//atv 2

