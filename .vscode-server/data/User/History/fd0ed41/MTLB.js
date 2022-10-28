const form = document.getElementById('formcadastro');
//console.log(form);

//criamos a funçãopara iniciar o nosso modulo
const initForm = (qualform) => {
    //busco o elemento do DOM
    const fomrRequerido = document.getElementById(qualform);
    //buscamos os filhos dele(imputs)
    const imputs = fomrRequerido.querySelectorAll('input');

    //perguntamos se esxiste algum rtesultado
    if (inputs.length > 0) {
        //se existir, percorremos o array de imputs
        inputs.forEach((input) => {
            //exibir no console o valor de cada imput
            console.log(imput.value);
        });
    }
}

const init = (qualform) => {
    const fomrRequerido = document.getElementById(qualform);
    const submit = formRequerido.querySelector("imput[type=submit]");
    submit.addEventListener("click", (event) => {
        initForm(formRequerido);
    });
}

export default init;