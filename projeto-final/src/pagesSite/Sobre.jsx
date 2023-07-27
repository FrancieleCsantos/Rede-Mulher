import styles from '../styles/pages/sobre.module.css'
import Subtitle from '../components/Subtitle'
import Button from '../components/Button';
import { Link } from 'react-router-dom';


function Sobre() {

    return (
        <>
            <main className={styles.containerMainSobre}>
                <section className={styles.containerSobre}>
                    <div className={styles.container}>
                        <Subtitle className={styles.containerSobreSubtitle} content="Conheça um pouco sobre mim" />
                        <p className={styles.containerSobreTexHello}>Olá,</p><br />
                        <p className={styles.containerSobreTex}> Aqui quem escreve é Fran Santos.
                            <br />
                            Criadora da Rede Mulher.
                        </p><br />

                        <p className={styles.containerSobreTex}>Comecei meu primeiro relacionamento aos 17 anos e ele era 5 anos mais velho. No início eu acreditava
                            que o seu comportamento  era normal, que as crises de ciúmes e que regular
                            minhas vestimentas eram apenas uma forma de demonstrar seu amor por mim.
                            Ele me fez acreditar que ninguém além dele poderia me amar, me afastou dos meus amigos,
                            gritava comigo o tempo todo, jogava na minha cara os presentes que me dava, era um
                            relacionamento baseado no controle e não no amor.
                        </p><br />
                        <p className={styles.containerSobreTex}>
                            Eu vivi um relacionamento abusivo na adolescência, tive dependência
                            emocional, e te digo caro leitor, foi doloroso sair daquela fase
                            sozinha. A rede Mulher foi criada com o propósito de conectar mulheres que sofreram violência
                            ou abuso a instituições que prestam assistência psicológica de forma gratuita.
                        </p><br />
                        <p className={styles.containerSobreTex}>
                            29 anos, formada em Gestão de Recursos Humanos, de Salvador-Ba.
                            Atualmente estudo analise e desenvolvimento de sistemas,
                            e estou em transição de carreira para a área de desenvolvimento
                            de software. Pensando nas diversas mulheres que passam pela mesma situação que vive,
                            desenvolvi a Rede Mulher com o Intuito de ajuda-las a identificar sinais de um
                            relacionamento abusivo e para que saibam onde buscar apoio.
                        </p>
                    </div>
                    <Link to="/ajuda"><Button className={styles.ButtonContent} text="Buscar ajuda" /></Link>
                </section>
            </main>
        </>
    )
}

export default Sobre;