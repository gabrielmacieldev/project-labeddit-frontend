# Projeto Labeddit

O Labeddit é uma rede social desenvolvida com uma API que permite criação de contas, recursos para login, postagem de conteúdos, likes e dislikes, exclusão e comentários de postagens, todos com suporte a dispositivos móveis e desktop totalmente responsivos. Para garantir a segurança dos usuários, utilizei técnicas de autenticação e autorização, com uso de tokens de segurança.

## 💻 Funcionalidades do Projeto

- Endpoints
    - Login
    - Signup
    - Create post
    - Get posts
    - Create comments
    - Get Comments
    - Likes or dislikes posts
    - Likes or dislikes comments
    - Delete post
    - Get Post by Id
    - Get Comment with Post By Id
    
- Autenticação e Autorização
    - Geração de UUID
    - Geração de hashes

- Código
    - POO (Programação Orientada a Objetos)
    - Arquitetura em Camadas
    

## 💿 Deploy 
[Link da aplicação](https://project-labeddit-gabrielmaciel.surge.sh/)


## 🗃️ Backend
[Link do repositório do backend](https://github.com/gabrielmacieldev/Project-Labeddit)

## 🚀 Tecnologias Utilizadas

 1.[NodeJS](https://nodejs.org/en/)

 2.[Typescript](https://www.typescriptlang.org/)

 3.[Express](https://expressjs.com/pt-br/)

 4.[SQLite](https://www.sqlite.org/index.html)

 5.[Knex](https://knexjs.org/guide/)

 6.[Postman](https://www.postman.com/)

7. [Cors](https://www.npmjs.com/package/cors)

8. [Arquitetura em camadas](https://imasters.com.br/arquitetura-da-informacao/arquitetura-em-camadas)

9. [Roteamento](https://expressjs.com/pt-br/api.html#router)

10. [Geração de UUID](https://www.npmjs.com/package/uuid)

11. [Geração de hashes](https://www.npmjs.com/package/bcrypt)

12. [Autenticação e autorização](https://www.npmjs.com/package/jsonwebtoken)


Aplicação back-end de servidor express com banco de dados sqlite3.

## Métodos
Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `PUT` | Atualiza dados de um registro ou altera sua situação. |
| `DELETE` | Remove um registro do sistema. |

## Respostas

| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (success).|
| `201` | Recurso criado com sucesso (success).|
| `400` | Erros de validação ou os campos informados não existem no sistema.|
| `404` | Registro pesquisado não encontrado (Not found).|


## Documentação
[Link Documentação](https://documenter.getpostman.com/view/24460918/2s93RZL9f1)

## Autor

 [Linkedin](https://www.linkedin.com/in/gabrielmacieldev/)
