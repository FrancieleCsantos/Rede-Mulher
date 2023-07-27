import Header from '../components/Header'
import styles from '../styles/pages/home.module.css'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import Text from '../components/Text'
import Image from '../components/Image'
import imgViolenciaNao from '../assets/violenciaNao1.jpg'
import mulherNoChao from '../assets/Foto3-chao1.jpg'
import ViolenciaFisica from '../assets/Foto1-mulher1.jpg'
import sexual from '../assets/sexual.jpg'
import Button from '../components/Button'
import ImgDenunce from "../assets/img1.jpg"
import ImgFlorecer from "../assets/img2.jpg"
import imgAmor from "../assets/img3.jpg"
import { Link } from 'react-router-dom'

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
                            e 21,1% foram forçadas a manter relações sexuais contra sua vontade." />
            <Link to="/ajuda"><Button className={styles.bthHome} text="Buscar ajuda" /></Link>
          </div>

        </div>

        <div className={styles.cardsHome}>
          <Title content="Como identificar os tipos de violência?" />
          <section className={styles.cardsContainer}> 
            <div className={styles.cardsHome1}>
              <Image className={styles.cardsImg} img={ViolenciaFisica} altText="Homem com punho fechado fazendo menção a agressão física" />
              <Subtitle content="Violência física" />
              <Text text="É aquela entendida como qualquer
                             conduta que ofenda integridade ou saúde corporal da mulher.
                             É praticada com uso de força física do agressor, que machuca a vítima de várias maneiras 
                             ou ainda com o uso de armas, exemplos: Bater, chutar, queimar, cortar e mutilar. " />

            </div>
            <div className={styles.cardsHome2}>
              <Image className={styles.cardsImg} img={mulherNoChao} altText="Mulher deitada no chão, aparentemente triste" />
              <Subtitle content="Violência psicológica" />
              <Text text="Qualquer conduta que cause dano emocional e diminuição da autoestima da mulher, 
                            nesse tipo de violência é muito comum a mulher ser proibida de trabalhar, estudar,
                             sair de casa, ou viajar, falar com amigos ou parentes." />
            </div>

            <div className={styles.cardsHome3}>
              <Image className={styles.cardsImg} img={sexual} altText="Mulher deitada no chão, aparentemente triste" />
              <Subtitle content="Violência sexual" />
              <Text text="é caracterizada como qualquer conduta que constranja a mulher
                             a presenciar, a manter ou a participar de relação sexual não desejada. 
                             Quando a mulher é obrigada a se prostituir, ameaça, coação ou uso da força;
                              que a induza a comercializar ou a utilizar, de qualquer modo, a sua sexualidade." />
            </div>
          </section>
        </div>
        <div className={styles.containerRevive}>
          <div className={styles.ReviveDenunce}>
            <Image className={styles.imgVetores} img={ImgDenunce} altText="O desenho de uma mulher triste se olhando no espelho" />
            <Text text="Não aceite nenhum tipo de violência. Denuncie ligue 180." />
          </div>
          <div className={styles.ReviveFlorecer}>
            <Image className={styles.imgVetores} img={imgAmor} altText="O desenho de uma mulher se regando" />
            <Text text="Quando você recuperar ou descobrir algo que nutre sua alma e traz alegria,
                         cuide-se o suficiente para dar espaço para isso em sua vida." />
          </div>
          <div className={styles.ReviveAmor}>
            <Image className={styles.imgVetores} img={ImgFlorecer} altText="O desenho de uma mulher se auto abraçando" />
            <Text text="Cultive o amor-próprio como quem cultiva uma árvore rara. Ele lhe dará bons frutos!" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
