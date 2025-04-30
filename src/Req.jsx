import { useEffect, useState } from "react";
import { api } from "./api/api";
import { Card } from "./components/card";
import sair from "./assets/images/sair.png";
import logo from "./assets/images/image.png";
import style from './Req.module.css';
import ModalInfo from "./components/modal";

export default function Req() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [erro, setErro] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [modal, setModal] = useState(undefined);

    useEffect(() => {
        const validPage = Math.min(6, Math.max(1, page));

        api.get(`/characters?page=${validPage}`)
            .then((res) => {
                setErro(false);
                setData(res.data.items);
            })
            .catch((error) => {
                setErro(true);
                console.error(error);
            });
    }, [page]);

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            {modal !== undefined && (
                <ModalInfo data={data.find((char) => char.id === modal)} close={() => setModal(undefined)} />
            )}

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

            <br /><br /><br />
            <section className={style.inicio}>
                <img src={logo} alt="logo" className={style.imagemAPI} style={{ width: "47vh" }} />
                <br />
                <div className={style.wrapinput}>
                    <input className={style.inputAPI}
                        type="text"
                        placeholder="Pesquisar personagem..."
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                    />
                    <br />
                    <input
                        className={style.inputAPI}
                        type="number"
                        placeholder="Digite uma página de 1 até 6"
                        value={page}
                        min="1"
                        max="6"
                        onChange={(event) => setPage(event.target.value)}
                        onBlur={(event) => {
                            const numValue = Number(event.target.value);
                            if (numValue < 1 || numValue > 6 || isNaN(numValue)) {
                                setPage(1);
                            } else {
                                setPage(numValue);
                            }
                        }}
                    />
                </div>
                {erro && <p style={{ color: "red" }}>Essa Página não existe, é de 1 até 6</p>}
                <br /><br />

                <div className={style.wrapCardsRow}>
                    {filteredData.map((item, index) => (
                        <div className={style.wrapAll1} key={index}>
                            <Card img={item.image} text={item.name} />
                            <div className={style.butaoFundo}>
                                <button style={{ maxWidth: "70%", marginTop: "10px" }} onClick={() => setModal(item.id)}>
                                    Informação - {item.name}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
