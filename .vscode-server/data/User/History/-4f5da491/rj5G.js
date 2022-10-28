import "../sass/app.scss";

const app= document.getElementById("app");

const ul= document.createElement('ul')
const li= document.createElement('li')
//const h1= document.createElement('Bem Vindo')
//const p= document.createElement('p')

li.innerHTML = "Menu inicial";
//h1.innerHTML = "Bem Vindo!";
//p.innerHTML = "Site Senac para acessos dos alunos";

ul.appendChild(li)

app.appendChild(ul)

// uma lista para o menu
// uma div container
// uma h de bem vindo
//uma p de descrição do site