# **commonjs-modules**
Este repositório contém exemplos de módulos CommonJS para uso em projetos Node.js.

## Objetivo
O objetivo deste projeto é fornecer exemplos práticos de como criar e utilizar módulos CommonJS em aplicações Node.js.

# Funcionalidades
- Exemplos de criação de módulos.
- Importação e exportação de funções e variáveis.
- Demonstração de uso de módulos internos e externos.
- Estrutura básica de um projeto Node.js utilizando CommonJS.

## Requisitos
- Node.js (versão 12 ou superior)

## Instalação
Para instalar e utilizar os módulos deste repositório, siga os passos abaixo:
Clone o repositório:
```bash
git clone https://github.com/gufvr/commonjs-modules.git
```
Navegue até o diretório do projeto:
```bash
cd commonjs-modules
```
Instale as dependências:
```bash
npm install
```

## Uso
Aqui estão alguns exemplos de como utilizar os módulos fornecidos neste repositório:
1. Importando um módulo:
```javascript
const meuModulo = require('./meuModulo');
```
2. Utilizando uma função exportada:
```javascript
const resultado = meuModulo.minhaFuncao();
console.log(resultado);
```
3. Executando o projeto:
```javascript
node index.js
```

## Estrutura do Projeto
- **index.js**: Ponto de entrada do aplicativo.
- **meuModulo.js**: Exemplo de um módulo exportado.
- **package.json**: Configurações do projeto e dependências.

### Licença
Este projeto está licenciado sob a MIT License.
