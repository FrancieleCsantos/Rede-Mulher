import Header from '../components/Header'
import styles from '../styles/pages/home.module.css'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import Text from '../components/Text'
import Image from '../components/Image'
import imgViolenciaNao from '../assets/violenciaNao.jpg'
import mulherNoChao from '../assets/Foto3-chao.jpg'


function Home() {
    return (

        <>
            <Header />

            <main className={styles.containerMainHome}>

                <div className={styles.containerHome}>

                    <Image className={styles.containerHomeImg1} img={imgViolenciaNao} altText="Homem segurando a mão da mulher de forma agressiva" />
                    <div className={styles.containerHomeText}>
                        <Title content="No Brasil, uma mulher é vítima de violência a cada quatro horas" />
                        <Text text="Segundo a pesquisa
                             conduzida pelo Fórum Brasileiro de Segurança
                             Pública e pelo Datafolha, 33,4% das mulheres
                             brasileiras com 16 anos ou mais experimentou
                             violência física ou sexual provocada por parceiro íntimo ao longo da vida.
                            24,5% afirmaram ter sofrido agressões físicas como tapa, batida e chute,
                            e 21,1% foram forçadas a manter relações sexuais contra sua vontade."/>
                    </div>
                </div>

                <div className={styles.cardsHome}>
                    <Title content="Como identificar os tipos de violência?" />
                    <section lassName={styles.cardsContainer}>
                        <div className={styles.cardsHome1}>
                            <Image className={styles.cardsImg} img={mulherNoChao} altText="Mulher deitada no chão, aparentemente triste" />
                            <Subtitle content="Violência psicológica" />
                            <Text text="conduta que cause dano
                            emocional e diminuição da autoestima da mulher
                            ou que lhe prejudique e perturbe o pleno desenvolvimento, 
                            ou ainda que vise degradar ou controlar suas ações, comportamentos, crenças e decisões,
                            mediante ameaça, constrangimento, humilhação, manipulação, isolamento, vigilância constante,
                          perseguição contumaz, insulto, chantagem, ridicularização."/>
                        </div>
                        <div className={styles.cardsHome2}>
                            <h2>Card2</h2>
                        </div>
                        <div className={styles.cardsHome3}>
                            <h2>Card3</h2>
                        </div>
                    </section>
                </div>
            </main>
        </>


    )
}


export default Home;