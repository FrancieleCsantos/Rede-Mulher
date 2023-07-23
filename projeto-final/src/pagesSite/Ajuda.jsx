import styles from '../styles/pages/ajuda.module.css'
import Image from '../components/Image';
import ajuda from "../assets/fundoAjuda2.png"
import Subtitle from "../components/Subtitle"

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
{/* <Title/> */}
                <div className={styles.containerInput}>
                    <input></input>
                    <div className={styles.containerCards}>

                    </div>
                </div>


            </main>
        </>
    )
}

export default Ajuda;