import style from "./App.module.css";
import sair from "./assets/images/sair.png";

export default function Contato() {
    const handleGitHub = () => {
        window.open("https://github.com/KauanGoes7", "_blank");
    };

    return (
        <section className={style.s2}>
            <div style={{ position: "absolute", top: "20px", left: "20px" }}>
                <a href={"/"}>
                    <img 
                        src={sair} 
                        alt="Voltar para o menu principal" 
                        className={style.sairAPI} 
                        style={{ width: "40px", cursor: "pointer" }} 
                    />
                </a>
            </div>
            
            <div className={style.contatoContainer}>
                <h1>Quer falar com o DEV?</h1>
                <h5>Visite meu perfil no GitHub</h5>

                <div className={style.botoesS2}>
                    <button onClick={handleGitHub} className={style.botaoS2}>
                        Visitar GitHub
                    </button>
                </div>
            </div>
        </section>
    );
}