import '../scss/style.scss'

//variavel recebe nosso aplicsativo
const app = document.getElementById("app");

//variavel recebe a criação de um elemento virtual chamado
const hello = document.createElement("h1");

//inserimos dentro deste elemento virtual um HTML usando 
hello.innerHTML = "Hi bem vindo!"

//acrescentamos aop elemento 'app' o elemento 'hello'
app.append(hello);