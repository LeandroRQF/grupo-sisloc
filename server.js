// Importa o objeto 'app' do arquivo 'app.js' localizado no diretório 'src'. 
// Este objeto geralmente representa uma instância do Express.js e é utilizado para configurar a aplicação.
import app from "./src/app.js";

// Define a porta em que o servidor irá escutar as requisições. A porta 3000 é uma escolha comum para desenvolvimento.
const PORT = 3000;

// Cria um objeto para armazenar as rotas da aplicação e suas respectivas respostas. 
// Neste caso, as respostas são strings simples, mas em aplicações reais, seriam funções que processam as requisições.
const rotas = {
    "/": "Curso de Express API.",
    "/livros": "Entrei na rota livros.",
    "/autores": "Entrei na rota autores."
};

// Inicia o servidor HTTP na porta especificada. A função de callback é executada quando o servidor está ouvindo.
// Imprime uma mensagem no console para indicar que o servidor está em execução.
app.listen(PORT, () => {
    console.log("Servidor escutando!");
});