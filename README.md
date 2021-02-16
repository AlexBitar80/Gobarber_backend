<h3 align="center">
	BootCamp Gostack - GoBarber Backend
</h3>

</div>
<p align="center">
  Essa aplicação foi desenvolvida como projeto principal do Bootcamp Gostack da Rocketseat. <br/>
  Esse servidor tem como objetivo prover os dados para os Projetos Web e Mobile do GoBarber.
</p>

<br/>

<p align="center">
  <img alt="GitHub watchers" src="https://img.shields.io/github/watchers/AlexBitar80/Gobarber_backend?style=social">

  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/AlexBitar80/Gobarber_backend">

  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/AlexBitar80/Gobarber_backend?style=social">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/AlexBitar80/Gobarber_backend">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/AlexBitar80/Gobarber_backend">
</p>

<br/>

## :star: Tecnologias usadas nessa aplicação

O projeto está utilizando as seguintes tecnologias:

-  [typescript](https://www.typescriptlang.org/)
-  [node.js](https://nodejs.org/en/)
-  [jest](https://jestjs.io/)
-  [typeorm](https://typeorm.io/#/)
-  [express](https://expressjs.com/pt-br/)
-  [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
-  [tsyringe](https://github.com/microsoft/tsyringe)
-  [date-fns](https://date-fns.org/)
-  [handlebars](https://handlebarsjs.com/guide/)
-  [multer](https://github.com/expressjs/multer)
-  [nodemailer](https://nodemailer.com/about/)
-  [rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible)
-  [uuid](https://github.com/uuidjs/uuid)
-  [redis](https://github.com/redis/redis)

## :rocket: Como rodar

<h4>
  <strong>Obs: Para iniciar as instâncias dos banco de dados eu estou usando o <a href="https://docs.docker.com/">Docker</a>, Com ele instalado siga os comandos abaixo para iniciar as instância do banco de dados e conseguir iniciar o projeto sem problemas. </strong>
</h4>

Para clonar e rodar esse projeto você vai precisar do [Node](https://nodejs.org/en/) do [Yarn](https://yarnpkg.com/) ou do [Npm](https://www.npmjs.com/get-npm) e do [Git](https://git-scm.com/) instalado na rua máquina.

```bash
# Faça o clone deste repositório para qualquer pasta de sua preferencia
$ git clone https://github.com/AlexBitar80/Gobarber_backend.git Gobarber_backend

# Iniciar instância do postgresql
$ docker run --name gostack-pg -e POSTGRES_PASSWORD=SuaSenha -p 5432:5432 -d postgres

# Iniciar instância do mongo
$ docker run --name mongodb -p 27017:27017 -d -t mongo

# Iniciar instância do redis
$ docker run --name redis -p 6379:6379 -d -t redis:alpine

# Vá até essa pasta
$ cd Gobarber_backend

# rode esses comandos para instalar as dependências
$ yarn || npm install

# rode esses comandos para rodar as migrations
$ yarn typeorm migration:run || npm run typeorm migration:run

# use esses comandos para rodar o Projeto
$ yarn dev:server || npm run dev:server

# use esses comandos para rodar os testes
$ yarn test || npm run test
```
