import styles from './servicos.module.css'

const Servicos = () => {
    return (
        <section className={styles.services}>
            <div className={styles.hours}>
                <h1>HORARIOS</h1>
                <p>seg a sex - 13:30 às 19:00</p>
                <p>sábado - 8:30 às 19:00</p>
            </div>
            <div className={styles.prices}>
                <h1>PREÇOS</h1>
                <ul>
                    <li>
                        <p>Cabelo</p>
                        <p>R$ 35,00</p>
                    </li>
                    <hr />
                    <li>
                        <p>Barba</p>
                        <p>R$ 35,00</p>
                    </li>
                    <hr />
                    <li>
                        <p>Combo (Barba + Cabelo)</p>
                        <p>R$ 60,00</p>
                    </li>
                    <hr />
                    <li>
                        <p>Sombrancelha</p>
                        <p>R$ 10,00</p>
                    </li>
                    <hr />
                    <li>
                        <p>Pézinho</p>
                        <p>R$ 10,00</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Servicos