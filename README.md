# MATT BLOG

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/MatheusOliveira047/matt-blog/blob/main/LICENSE)

## Sobre o projeto

Matt Blog é um blog onde você pode criar uma conta e publicar seus posts sobre qualquer assunto, o sistema de cadastro de usuário e login foram feitos com firebase, o CRUD dos posts também foi criado no firebase.

A aplicação foi feita em React.js.

Para ver a aplicação clique no link: <https://matt-blog.vercel.app/>

### Layout mobile

<img height="400em"  src="https://github.com/MatheusOliveira047/matt-blog/blob/main/assets/img/mobile1.jpeg"/> - <img height="400em" src="https://github.com/MatheusOliveira047/matt-blog/blob/main/assets/img/mobile2.jpeg"/> - <img height="400em" src="https://github.com/MatheusOliveira047/matt-blog/blob/main/assets/img/mobile3.jpeg"/> - <img height="400em" src="https://github.com/MatheusOliveira047/matt-blog/blob/main/assets/img/mobile4.jpeg"/> -<img height="400em" src="https://github.com/MatheusOliveira047/matt-blog/blob/main/assets/img/mobile5.jpeg"/> - <img height="400em" src="https://github.com/MatheusOliveira047/matt-blog/blob/main/assets/img/mobile6.jpeg"/> - <img height="400em" src="https://github.com/MatheusOliveira047/matt-blog/blob/main/assets/img/mobile7.jpeg"/> - <img height="400em" src="https://github.com/MatheusOliveira047/matt-blog/blob/main/assets/img/mobile8.jpeg"/>


### Layout web

<img width="400em" height="300em" src="https://github.com/MatheusOliveira047/matt-blog/blob/main/assets/img/web1.png"/> - <img width="400em"  height="300em" src="https://github.com/MatheusOliveira047/matt-blog/blob/main/assets/img/web2.png"/> - <img width="400em" height="300em" src="https://github.com/MatheusOliveira047/matt-blog/blob/main/assets/img/web3.png"/> - <img width="400em" height="300em" src="https://github.com/MatheusOliveira047/matt-blog/blob/main/assets/img/web4.png"/> - <img width="400em" height="300em" src="https://github.com/MatheusOliveira047/matt-blog/blob/main/assets/img/web5.png"/> - <img  width="400em" height="300em" src="https://github.com/MatheusOliveira047/matt-blog/blob/main/assets/img/web6.png"/> - <img width="400em" height="300em" src="https://github.com/MatheusOliveira047/matt-blog/blob/main/assets/img/web7.png"/> - <img width="400em" height="300em" src="https://github.com/MatheusOliveira047/matt-blog/blob/main/assets/img/web8.png"/> - <img width="400em" height="300em" src="https://github.com/MatheusOliveira047/matt-blog/blob/main/assets/img/web9.png"/> - <img width="400em" height="300em" src="https://github.com/MatheusOliveira047/matt-blog/blob/main/assets/img/web10.png"/>

## Tecnologias utilizadas

### Back end

- Firebase

### Front end

- HTML , Css , Javascript
- React-Router-Dom
- React.js

### Implantação em produção

- Back end: Firebase
- Front end: Vercel

## Implantações de desenvolvimento

- React.js foi utilizado para criar a SPA (Single Page Application), do React foi utilizado os hooks para implementar os custom Hook para ser feito algumas funcionalidades na aplicação, foi criado o Hook de autenticação de usuário utilizando o useContext do React para ser usado em toda aplicação o usuário, com o usuário criado a aplicação monitora esse usuário e bloqueia ou liberar rotas para o usuário acessar de acordo com a existência de usuário logado, utilizando os hooks useState, useEffect e useReducer foram criados os  custom Hooks de inserir, deletar e altulizar os posts no Banco de Dados do Firebase.

- React-Router-Dom foi utilizado para criar o roteamento da aplicação foi utilizado a versão 6.4.5, dentro do router foi feito a verificação de usuário existente para ter acesso as rotas bloqueadas.

- CSS foi utilizado com conceito de Css Modules que evita vazamento de css para outros componentes, assim cada componente tem seu proprio css, evitando conflito entre outros componentes.

- Firebase foi utilizado para criação de novos usuários e login no sistema, foi utilizado também para ser feito o CRUD dos posts, cada usuário pode criar, editar e deletar seus posts, qualquer usuário pode ver todos os posts já criado no sistema

## Autor

Matheus Oliveira

<https://www.linkedin.com/in/ludsonmatheus/>
