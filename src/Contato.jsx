import style from "./App.module.css";
import { useState } from "react";

export default function Contato() {
    const defaultPhoneNumber = "5541997545587";
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleZap = () => {
        const { nome, email, message } = formData;
        const urlZAPZAP = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
        Nome:%20${nome}%0D%0A
        Email:%20${email}%0D%0A
        Mensagem:%20${message}%0D%0A`;
        window.open(urlZAPZAP, "_blank");
    };

    return (
        <section className={style.s2}>
            <div className={style.contatoContainer}>
                <h1>Quer falar com o DEV?</h1>
                <h5>Coloque as informações nos blocos de textos e envie sua mensagem</h5>
                
                <div className={style.inputS2}>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                </div>

                <div className={style.inputS2}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className={style.mensagemS2}>
                    <textarea
                        name="message"
                        placeholder="Mensagem"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                    ></textarea>
                </div>

                <div className={style.botoesS2}>
                    <button onClick={handleZap} className={style.botaoS2}>
                        Enviar mensagem
                    </button>
                </div>
            </div>
        </section>
    );
}