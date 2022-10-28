const form = document.getElementById('formCadastro');
//console.log(form);

//criamos a funçãopara iniciar o nosso modulo
const initForm = (qualform) => {
    //busco o elemento do DOM
    const formRequerido = qualform;
    //buscamos os filhos dele(imputs)
    const imputs = formRequerido.querySelectorAll('input');

    //perguntamos se esxiste algum rtesultado
    if (imputs.length > 0) {
        //se existir, percorremos o array de imputs
        imputs.forEach((input) => {
            //exibir no console o valor de cada imput
            console.log(input)
        });
    }
}

const init = (qualform) => {
    //recebe o elemento do DOM de acordo com a string do ID
    const formRequerido = document.getElementById(qualform);
    //busca o botão de submit
    const submit = formRequerido.querySelector("imput[type=submit]");
    submit.addEventListener("click", (evento) => {
        //previni que o elemento , no caso o imput submit, façao que ele fez por padrão
        evento.preventDefault();
        //chama a função que criamos
        initForm(formRequerido);
    });
}

export default init;