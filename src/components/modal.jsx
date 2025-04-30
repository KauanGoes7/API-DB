import style from './modal.module.css';
import closeIcon from '../assets/images/close.png';

function ModalInfo({ data, close }) {
    if (!data) return null;

    return (
        <div className={style.modalOverlay}>
            <div className={style.modalContent}>
                <button className={style.closeButton} onClick={close}>
                    <img src={closeIcon} alt="Fechar modal" />
                </button>

                <div className={style.characterContainer}>
                    <div className={style.characterImage}>
                        <img src={data.image} alt={data.name} className={style.fullBodyImage} />
                        <div className={style.kiPulse}></div>
                    </div>

                    <div className={style.characterInfo}>
                        <h2 className={style.characterName}>{data.name}</h2>
                        <div className={style.infoGrid}>
                            <div className={style.infoItem}>
                                <span className={style.infoLabel}>Ki Base:</span>
                                <span className={style.infoValue}>{data.ki || "N/A"}</span>
                            </div>
                            <div className={style.infoItem}>
                                <span className={style.infoLabel}>Raça:</span>
                                <span className={style.infoValue}>{data.race}</span>
                            </div>
                            <div className={style.infoItem}>
                                <span className={style.infoLabel}>KI Máximo:</span>
                                <span className={style.infoValue}>{data.maxKi}</span>
                            </div>
                            <div className={style.infoItem}>
                                <span className={style.infoLabel}>Afiliado:</span>
                                <span className={style.infoValue}>{data.affiliation}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalInfo;