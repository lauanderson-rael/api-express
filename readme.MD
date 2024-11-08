# Testando a API

### Instale as dependencias do projeto, com o seguinte comando no terminal
  npm install

### Inicie o servidor MongoDB (requer o mongoDB instalado)
crie o diretorio 'C:\data\db' <br>
rode o comando abaixo no terminal  <br>
mongod

### Inicialize o projeto
  npm start

### Utilizando alguma ferramenta de testar API, como 'Postman, Insomnia ou ThunderClient' <br>Faça um POST para http://localhost:3000/users com o body abaixo

<div style="color: aqua ">
  {
    "name": "Carlos",
    "email": "carlos@example.com",
    "password": "senha1234"
  }
</div>

<img src="./images/image3.png" width='80%'/>

### Explorando Banco de Dados no 'MongoDB Compass'

O MongoDB Compass é uma ferramenta excelente para quem quer evitar interações por linha de comando e prefere uma interface visual para gerenciar dados MongoDB. Se você tiver mais perguntas ou precisar de ajuda com algo específico, me avise!

<p>
Ao abrir o MongoDB Compass, você verá uma tela para conectar-se ao banco de dados. A URI padrão para o MongoDB local é:
<span style="color: aqua "> mongodb://localhost:27017 </span>
</p>

<img src="./images/image.png" width='80%'/>

### Principais Funcionalidades:

<ul>
  <li>Visualizar Bancos de Dados:</li>
  <li>Visualizar e Manipular Documentos:</li>
  <li>Executar Consultas:</li>
    Você pode escrever consultas MongoDB em JSON para filtrar, ordenar e buscar documentos. Por exemplo, para buscar usuários com o nome "Lau":

    json

    { "name": "Bernardo" }

  <li>Visualizar Estatísticas do Banco de Dados:</li>
</ul>

<p>
O MongoDB Compass é uma ferramenta excelente para quem quer evitar interações por linha de comando e prefere uma interface visual para gerenciar dados MongoDB.
</p>


### Extenções vscode para ajudar no desenvolvimento

<ul>
  <li>IntelliSense for CSS class names in HTML</li>
  <li>Color Highlight</li>
  <li>Material Icon Theme</li>
  <li>Thunder Client</li>
  <li>Prettier - Code formatter</li>
  <li>JavaScript (ES6) code snippets</li>
</ul>