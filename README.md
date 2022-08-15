<h1 align="center">Desafio Somos</h1>

<img src="https://burnbook.b-cdn.net/wp-content/uploads/2019/06/N3DS_PokemonSuperMysteryDungeon_MainIllustration_png_jpgcopy.0.0.jpg" alt="exemplo imagem">

Linguagem: `javascript`

Framework: `Express`

<h1 align="center">Descrição</h1>

Api de pokemons que realiza batalhas entre eles

<h1 align="center">Pré-requisitos</h1>

Antes de iniciar, se assegure que possui os requisitos abaixo:

- node 16.16.0
- mysql 4.10

<h1 align="center">Instalação/Execução</h1>

Para instalar/executar este projeto, siga as seguintes etapas:

- clone o repositorio.
- rode npm install para instalar as depencias. 
- use o script de banco de dados no seu mysql.
- criei um dotenv igual ao de examplo contendo as informações do banco de dados, ou use dados integrados de um ambiente docker (ENV).
- use npm start para inicia o projeto.

<h1 align="center">Como usar a api ?</h1>

- Vá na rota `/login` e gere um token.

<img src="https://github.com/Mateus-AAC/desafiobackpokemonsiteris/blob/develop/readme/img/imagens%20do%20readme/login.PNG?raw=true" alt="exemplo imagem">

- Vá para rota `/` e coloque o token no headers com a key: `x-access-token` e o value: `coloque seu token`.

<img src="https://github.com/Mateus-AAC/desafiobackpokemonsiteris/blob/develop/readme/img/imagens%20do%20readme/rota%20home.PNG?raw=true" alt="exemplo imagem">

<h1 align="center">🤝 Colaboradores</h1>

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/85250525?v=4" width="100px;" alt="o GitHub"/><br>
        <sub>
          <b>Mateus Augusto</b>
        </sub>
      </a>
    </td>
</table>