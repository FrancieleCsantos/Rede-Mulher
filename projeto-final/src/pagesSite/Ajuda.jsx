import styles from '../styles/pages/ajuda.module.css'
import Image from '../components/Image';
import ajuda from "../assets/fundoAjuda2.png"
import Subtitle from "../components/Subtitle"
import Title from '../components/Title'
import Button from '../components/Button';

function Ajuda() {
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
                        <input placeholder='Pesquise pelo nome da cidade'></input>
                        <button>Pesquisar</button>
                    </div>
                    <div className={styles.containerCards}>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Ajuda;