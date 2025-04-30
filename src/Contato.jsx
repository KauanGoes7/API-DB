import style from "./App.module.css";

export default function Contato() {
    const handleGitHub = () => {
        window.open("https://github.com/KauanGoes7", "_blank");
    };

    return (
        <section className={style.s2}>
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