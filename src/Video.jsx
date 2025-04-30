import style from "./Video.module.css";

export default function Video() {
  return (
    <div className={style.videoContainer}>
      <div className={style.videoHeader}>
        <h1>Dragon Ball - Introdução</h1>
        <a href="/" className={style.backButton}>← Voltar</a>
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