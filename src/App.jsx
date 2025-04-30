import style from "./App.module.css";
import { Menu } from "./components/menu";
import logo from "./assets/images/image.png";

function App() {
    return (
        <>
            <Menu s1="Vídeo Intro" s2="Meu GitHub" style={{width: "100%"}}/>
            
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
            </main>
        </>
    )
}

export default App;