import styles from '../styles/pages/ajuda.module.css'
import Image from '../components/Image';
import ajuda from "../assets/fundoAjuda2.jpg"
import Subtitle from "../components/Subtitle"
import Title from '../components/Title'
import { useState, useEffect } from 'react';
import data from '../databse/api.js'


function Ajuda() {
    const [insti, setInsti] = useState([])
    const [busca, setBusca] = useState('')
 
    useEffect(() => {
        try {
            setInsti(data)
        } catch (error) {
            console.error("Ops, ocorreu um erro aqui :", error)
        }
    }, [])

    console.log(insti)
    const lugaresFiltrados = insti
    .filter((lugaresDeApoio) => lugaresDeApoio.Instituição.toLocaleLowerCase().includes(busca.toLocaleLowerCase()))

    return (
        <>
            <main className={styles.containerMainAjuda}>
                <div className={styles.containerImgAjuda}>
                    <Image img={ajuda} altText="Grupo de mulheres se braçando" />
                    <Subtitle content="O objetivo do acolhimento psicológico é promover uma escuta ativa,
                      para que você possa  falar sobre sentimentos e emoções presentes, momentos e 
                    vivências com algum ponto de dificuldade, gerando reflexão e autoconhecimento."/>
                </div>
                <Title content="A Rede Mulher te conecta a redes de apoio, faça uma busca." />
                <div className={styles.containerInput}>
                    <div className={styles.containerBusca}>

                        <input placeholder='Pesquise pelo nome da cidade' type='text'
                            value={busca}
                            onChange={(event) => setBusca(event.target.value)}></input>
                        <button className={styles.containerBtnAjuda}>Pesquisar</button>
                    </div>
                </div>
                <div className={styles.containerCards}>
                    {lugaresFiltrados.map((instis) => (
                        <div className={styles.containerCard} key={instis.id}>
                            <h3 className={styles.cardTitle}>{instis.Instituição}</h3>
                            <span className={styles.cardContato}>{instis.Cidade}</span>
                            <span className={styles.cardEndereco}>{instis.Endereço}</span>
                            <span className={styles.cardContato}>{instis.Contato}</span>
                            <p className={styles.cardContato}>{instis.Informações}</p>
                        </div>
                    )
                    )
                    }

                </div>
            </main>
        </>
    )
}

export default Ajuda;