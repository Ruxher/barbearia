import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.home}>
        <div className={styles.title}>
          <h1>
            BARBEARIA CAUAN
          </h1>
        </div>
        <div className={styles.description}>
          <p>quem vem uma vez, volta sempre.</p>
        </div>
        <div>
          <ul className={styles.button}>
            <li>
              <Link className={styles.link} href='https://www.instagram.com/barbearia_cauan?igsh=aHd0Mm03M3I4dmpp&utm_source=qr' >Agendar Horario</Link>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.barber}>
        <div className={styles.column}>
          <h1>SERVIÇO <a>QUE SUPERA A EXPERIENÇA</a></h1>
          <p>"Fui pela primeira vez sem grandes expectativas e saí de lá sem acreditar no resultado. O Cauan tem uma atenção aos detalhes que você não vê em todo lugar, perguntou o que eu queria, deu a opinião dele, e o corte ficou ainda melhor do que eu imaginava. O ambiente é aconchegante, o atendimento é tranquilo e você sente que ele realmente gosta do que faz. Virei cliente fixo na hora."</p>
        </div>
        <img src="../../corte4.jpeg"/>
      </section>
    </>
  );
}
