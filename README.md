# API de Cálculo de Produtório em Node.js

Esta é uma API simples desenvolvida em **Node.js** usando o framework **Express** para calcular o produtório de uma sequência numérica de acordo com a equação:

`x_i = i + 1/i,  com i > 0`

A API permite calcular o produtório entre dois limites, \( m \) (limite inferior) e \( n \) (limite superior), utilizando métodos **iterativo** ou **recursivo**.

## Desenvolvido por:
- [Ana Eduarda](https://github.com/f3ijo)
- [Isabella Couto](https://github.com/iscoutto)

## Pré-requisitos

- **Node.js** (versão >= 18.0.0)
- **Express.js** (instalado via npm)

## Instalação

1. Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/iscoutto/api-nodejs.git
   ```
   
2. Navegue até o diretório do projeto:
   ```bash
   cd api-nodejs/api
   ```

3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

## Como Executar a API

1. Inicie a aplicação Node.js:
   ```bash
   node app.js
   ```

2. A API estará disponível localmente no seguinte endereço:
   ```
   http://localhost:3000
   ```

## Como Usar

A API possui uma rota GET `/produtorio` para calcular o produtório entre dois limites, \( m \) e \( n \), utilizando um método iterativo ou recursivo.

### Parâmetros

- `m`: Limite inferior (inteiro maior que 0)
- `n`: Limite superior (inteiro maior ou igual a \( m \))
- `metodo`: Método de cálculo a ser usado, pode ser **iterativo** ou **recursivo**

### Exemplos de Requisição

#### Requisição usando o método iterativo:

```http
GET http://localhost:3000/produtorio?m=1&n=5&metodo=iterativo
```

#### Requisição usando o método recursivo:

```http
GET http://localhost:3000/produtorio?m=1&n=5&metodo=recursivo
```

### Exemplo de Resposta

```json
{
  "resultado": 368.33333333333337
}
```

### Validação de Entrada

- O valor de `m` deve ser maior que 0.
- O valor de `n` deve ser maior ou igual a `m`.
- O parâmetro `metodo` deve ser "iterativo" ou "recursivo".
  
Caso algum parâmetro seja inválido, a API retornará um erro com status 400.

### Exemplo de Erro de Validação

```json
{
  "error": "Parâmetros inválidos. O limite inferior deve ser maior que 0."
}
```

## Estrutura do Código

- **Função `produtorioIterativo(m, n)`**: Calcula o produtório de forma iterativa, multiplicando os valores de \( x_i \) entre \( m \) e \( n \).
  
- **Função `produtorioRecursivo(m, n)`**: Calcula o produtório de forma recursiva, multiplicando os valores de \( x_i \) entre \( m \) e \( n \).
  
- **Função `calcularXi(i)`**: Calcula o valor de \( x_i = i + \frac{1}{i} \) para um valor \( i \).

## Tecnologias Utilizadas

- **Node.js**
- **Express.js**
