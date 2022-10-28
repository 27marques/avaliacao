const form = document.getElementById('formcadastro');
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
            console.log(imputs.value);
        });
    }
}

const init = (qualform) => {
    const formRequerido = document.getElementById(qualform);
    const submit = formRequerido.querySelector("imput[type=submit]");
    submit.addEventListener("click", (evento) => {
        evento.preventDefault();
        initForm(formRequerido);
    });
}

export default init;