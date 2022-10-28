<?php
include "header.php";
?>
<div class="container">
    <div class="row">
        <div class="col-12">
            <h1>Fale conosco</h1>
            <div class="">
                <form action="" class="formulario">
                    <div>
                        <label for="nome">Digite seu nome</label>
                        <input type="text" name="nome" id="nome">
                    </div>
                    <div>
                        <label for="email">Digite seu e-mail</label>
                        <input type="email" name="email" id="email" required>
                    </div>
                    <div>
                        <label for="cpf">Digite seu CPF</label>
                        <input type="number" name="cpf" id="cpf" required>
                    </div>
                    <input type="submit" value="Enviar">
                </form>
            </div>
        </div>
    </div>
</div>
<?php

include "footer.php";
?>