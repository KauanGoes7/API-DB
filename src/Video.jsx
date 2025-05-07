import style from "./Video.module.css";
import sair from "./assets/images/sair.png";

export default function Video() {
  return (
    <div className={style.videoContainer}>
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
      
      <div className={style.videoHeader}>
        <h1>Dragon Ball - Introdução</h1>
      </div>
      
      <div className={style.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/flYJj85aJsw"
          title="Introdução ao Dragon Ball"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <div className={style.videoDescription}>
        <p>Assista à introdução clássica de Dragon Ball</p>
      </div>
    </div>
  );
}