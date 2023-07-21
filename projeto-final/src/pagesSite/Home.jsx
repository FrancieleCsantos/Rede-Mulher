import Header from '../components/Header'
import styles from '../styles/pages/home.module.css'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import Text from '../components/Text'
import Image from '../components/Image'
import imgViolenciaNao from '../assets/violenciaNao.jpg'
import mulherNoChao from '../assets/Foto3-chao.jpg'
import ViolenciaFisica from '../assets/Foto1-mulher.jpg'
import sexual from '../assets/sexual.jpg'
import emocional from '../assets/dependenciaEmocional.jpg'


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
                            <Image className={styles.cardsImg} img={ViolenciaFisica} altText="Homem com punho fechamento fazendo menção a agressão física" />
                            <Subtitle content="Violência física" />
                            <Text text="É aquela entendida como qualquer
                             conduta que ofenda integridade ou saúde corporal da mulher.
                             É praticada com uso de força física do agressor, que machuca a vítima de várias maneiras 
                             ou ainda com o uso de armas, exemplos: Bater, chutar, queimar, cortar e mutilar. "/>

                        </div>
                        <div className={styles.cardsHome2}>
                            <Image className={styles.cardsImg} img={mulherNoChao} altText="Mulher deitada no chão, aparentemente triste" />
                            <Subtitle content="Violência psicológica" />
                            <Text text="Qualquer conduta que cause dano emocional e diminuição da autoestima da mulher, 
                            nesse tipo de violência é muito comum a mulher ser proibida de trabalhar, estudar,
                             sair de casa, ou viajar, falar com amigos ou parentes."/>
                        </div>

                        <div className={styles.cardsHome3}>
                            <Image className={styles.cardsImg} img={sexual} altText="Mulher deitada no chão, aparentemente triste" />
                            <Subtitle content="Violência sexual" />
                            <Text text="é caracterizada como qualquer conduta que constranja a mulher
                             a presenciar, a manter ou a participar de relação sexual não desejada. 
                             Quando a mulher é obrigada a se prostituir, ameaça, coação ou uso da força;
                              que a induza a comercializar ou a utilizar, de qualquer modo, a sua sexualidade."/>
                        </div>
                    </section>
                </div>
                <div className={styles.containerHome}>
                    <Image className={styles.containerHomeImg1} img={emocional} altText="Homem segurando a mão da mulher de forma agressiva" />
                    <div className={styles.containerHomeText}>
                        <Title content="O que é dependência emocional?" />
                        <Text text="A dependência emocional caracteriza-se pelo apego excessivo a outra pessoa.
                         Esta pode ser um cônjuge, um parente ou um amigo. Todavia, é mais comum ver esse 
                         tipo de dinâmica em relacionamentos amorosos, onde são investidas mais emoções
                          e sentimentos."/>
                    </div>
                </div>
            </main>
        </>


    )
}


export default Home;