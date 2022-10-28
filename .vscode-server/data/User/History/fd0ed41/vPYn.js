const form = document.getElementById('formcadastro');
//console.log(form);

//Criamos a funçãopara iniciar o nosso modulo
const initForm = (qualform) => {
    const fomrRequerido = document.getElementById(qualform);
    
    const imputs = fomrRequerido.querySelectorAll('input');

    if (inputs.length > 0){
        inputs.forEach((input) => {
            console.log(imput.value);
            });
        }
    }

export default form;