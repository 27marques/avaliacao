
const BoasVindas = () => {

    return (
        <div class="boasvindas_page">
            <div id="sobre_page" style={{ textAlign: "justify" }}>
                <h1 style={{ textAlign: "center" }}> Boas Vindas </h1>
                <p style={{ textAlign: "center" }}> Opa! Tudo bem? Obrigado por se interessar em nosso site! </p>
                <p style={{ textAlign: "center" }}>Vamos compartilhar assuntos interessantes com nosso publico, e nesta semana será sobre a banda QUEEN!!</p>
                <p style={{ textAlign: "center" }}>Se você desejar saber mais sobre este assunto, visite nossa área "Sobre", lá você encontrará conteúdos relativos a banda.</p>
                <ImageList sx={{ width: 1950, height: 1100}} cols={4} rowHeight={500}></ImageList>
                <img src="https://upload.wikimedia.org/wikipedia/pt/a/ad/Queen_II.jpg" alt="logo"
                    style={{ maxHeight: "200px", width: "auto" }} />
                <img src="https://upload.wikimedia.org/wikipedia/pt/5/55/Sheer_Heart_Attack.jpg" alt="logo" 
                    style={{ maxHeight: "200px", width: "auto" }} />
                <img src="https://upload.wikimedia.org/wikipedia/pt/b/bf/A_Night_at_the_Opera_Queen.jpg" alt="logo" 
                    style={{ maxHeight: "200px", width: "auto" }} />
                <img src="https://upload.wikimedia.org/wikipedia/pt/8/83/A_Day_at_the_Races_-_Queen_-_1976.jpg" alt="logo" 
                    style={{ maxHeight: "200px", width: "auto" }} />
                <img src="https://upload.wikimedia.org/wikipedia/pt/7/7d/Queen-News_of_the_World.jpg" alt="logo" 
                    style={{ maxHeight: "200px", width: "auto" }} />
                <img src="https://upload.wikimedia.org/wikipedia/pt/d/d9/Queen-Jazz.jpg" alt="logo" />
                <h2 style={{ textAlign: "center" }}>fique a vontade!!</h2>
             </div>
        </div>
    )

};
export default BoasVindas;