// Importa o módulo Express.js, que é a base para criar aplicações web Node.js.
import express from "express";

// Cria uma instância do Express.js, que será utilizada para configurar e iniciar o servidor.
const app = express();

// Habilita a capacidade de analisar o corpo das requisições JSON. 
// Isso é essencial para receber dados em formato JSON, como em requisições POST.
app.use(express.json());

// Define um array simples para armazenar dados de livros. 
// Em uma aplicação real, esses dados seriam persistidos em um banco de dados.
const livros = [
    {
        id: 1,
        titulo: "Senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
];

// Função auxiliar para encontrar o índice de um livro no array, dado o seu ID.
// Utiliza o método findIndex para encontrar o primeiro elemento que satisfaça a condição.
function buscaLivro(id){
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
};

// Define uma rota GET para a raiz (/). 
// Quando uma requisição GET for feita para a raiz, esta rota responderá com o texto "Curso de Node.js".
app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

// Define uma rota GET para listar todos os livros. 
// Quando uma requisição GET for feita para /livros, esta rota responderá com um JSON contendo todos os livros.
app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

// Define uma rota GET para buscar um livro por ID. 
// Utiliza a função buscaLivro para encontrar o índice do livro e retorna o livro encontrado em formato JSON.
app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);

    res.status(200).json(livros[index]);
});

// Define uma rota POST para criar um novo livro. 
// Extrai os dados do corpo da requisição (em formato JSON) e adiciona o novo livro ao array.
app.post("/livros", (req, res) => {
    livros.push(req.body);
    
    res.status(201).send("Livro cadastrado com sucesso!");
});

// Define uma rota PUT para atualizar um livro existente. 
// Encontra o livro pelo ID, atualiza o título e retorna a lista completa de livros.
app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;

    res.status(200).json(livros);
});

// Define uma rota DELETE para remover um livro. 
// Encontra o livro pelo ID e remove-o do array.
app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);

    res.status(200).send("Livro removido com sucesso!");
});

// Exporta o objeto da aplicação para que possa ser utilizado em outros módulos.
export default app;