import style from "./App.module.css";
import { Menu } from "./components/menu";
import logo from "./assets/images/image.png";
import sairIcon from "./assets/images/sair.png"; // Importe o ícone

function App() {
    return (
        <>
            <Menu s1="API" s2="Quer falar com o Dev" style={{width: "100%"}}/>
            
            {/* Elementos de fundo temáticos */}
            <div className={style.dragonBall}></div>
            <div className={style.dragonBall}></div>
            <div className={style.dragonBall}></div>
            
            <main>
                <section id="s1" className={style.s1}>
                    <img src={logo} alt="principio" className={style.logoS1}/>
                    <button className={style.butao}>
                        <a href={'/requisicao'} className={style.buttonLink}>
                            Conhece os Personagens do Dragon Ball
                        </a>
                    </button>
                </section>

                {/* Seção de Contatos com ícone de voltar */}
                <section id="s2" className={style.s2}>
                    <a href="/" className={style.sairContato}>
                        <img src={sairIcon} alt="Voltar" />
                    </a>
                    {/* ... resto do conteúdo de contatos ... */}
                </section>
            </main>
        </>
    )
}

export default App;