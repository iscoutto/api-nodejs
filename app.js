// Importa o módulo 'express', um framework para criar servidores HTTP no Node.js
const express = require('express');
const app = express();
const port = 3000;

// Função que calcula o valor de x_i para o produtório, com base na nova equação
function calcularXi(i) {
    return i + (1 / i);
}

// Função iterativa para calcular o produtório de x_i
function produtorioIterativo(m, n) {
    let resultado = 1;
    for (let i = m; i <= n; i++) {
        resultado *= calcularXi(i);  // Calcula o x_i e multiplica no resultado
    }
    return resultado;
}

// Função recursiva para calcular o produtório de x_i
function produtorioRecursivo(m, n) {
    if (m > n) return 1;
    return calcularXi(m) * produtorioRecursivo(m + 1, n);
}

// Rota para calcular o produtório
app.get('/produtorio', (req, res) => {
    const { m, n, metodo } = req.query;

    // Validação de entrada para inteiro
    const limiteInferior = parseInt(m);
    const limiteSuperior = parseInt(n);

    if (isNaN(limiteInferior) || isNaN(limiteSuperior) || limiteInferior > limiteSuperior || limiteInferior <= 0) {
        return res.status(400).json({ error: 'Parâmetros inválidos. O limite inferior deve ser maior que 0.' });
    }

    let resultadoado;

    // Seleção do método de execução
    if (metodo === 'iterativo') {
        resultadoado = produtorioIterativo(limiteInferior, limiteSuperior);
    } else if (metodo === 'recursivo') {
        resultadoado = produtorioRecursivo(limiteInferior, limiteSuperior);
    } else {
        return res.status(400).json({ error: 'Método inválido. Use "iterativo" ou "recursivo".' });
    }

    res.json({ resultadoado });
});

// Inicia o servidor na porta definida
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
