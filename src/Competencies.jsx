import styles from './Competencies.module.css';

const competenciesData = [
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/ed385e0488d74a178f255ec248d0cd4a/a90fef3bcd44f4c7cabffc3a9967af385986b8397ebb6040be11c44551b0d9da?apiKey=ed385e0488d74a178f255ec248d0cd4a&",
        title: "Доступ к рынкам",
        description: "Обеспечим доступ клиентов к международным целевым рынкам и качественной сети контрагентов, позволяющей реализовать коммерческие и иные задачи"
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/ed385e0488d74a178f255ec248d0cd4a/20f50cb4ddc5001702dd8fd64144d1b10c5a8f220190d013e01120f9d272c8ca?apiKey=ed385e0488d74a178f255ec248d0cd4a&",
        title: "Деловое сопровождение",
        description: "Предоставляем консалтинговое, юридическое и административное сопровождение проектов"
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/ed385e0488d74a178f255ec248d0cd4a/c46b91900500e1f2d2ed77472bfd41370a1fe30f110775c74e3f5e10e25350a9?apiKey=ed385e0488d74a178f255ec248d0cd4a&",
        title: "Исследование и аналитика",
        description: "Подготовим аналитические материалы, реализуем социологические и отраслевые исследования для оценки спроса, предложения и потенциала для принятия управленческих решений"
    }
];

const Competencies = () => {
    return (
        <section className={styles.competencies}>
            <div className={styles.competenciesContent}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h2 className={styles.competenciesTitle}>КЛЮЧЕВЫЕ<br />КОМПЕТЕНЦИИ</h2>
                    <img src="/img/d869c24072d168f604f29d0ba1535c4feac6c5f43be83c268834313a7e944d19.png" alt="Competencies illustration" className={styles.competenciesIllustration} />
                </div>
                <div className={styles["separator"]}>
                    <img src="/Group-16.svg" alt="" style={{position: "absolute", top: 0, left: '50%', transform: 'translate(-50%, 24px)', height: "100%"}} />
                </div>
                <div className={styles.competenciesList}>
                    {competenciesData.map((competency, index) => (
                        <div key={index} className={styles.competencyItem}>
                            <img src={competency.icon} alt={competency.title} className={styles.competencyIcon} />
                            <div className={styles.competencyInfo}>
                                <h3 className={styles.competencyTitle}>{competency.title}</h3>
                                <div className={styles.competencySeparator}></div>
                                <p className={styles.competencyDescription}>{competency.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <img src="https://cdn.builder.io/api/v1/image/assets/ed385e0488d74a178f255ec248d0cd4a/b598c85503350e65b72791cfa69de59ee3f24094f51a2c87baca92a1a2af115e?apiKey=ed385e0488d74a178f255ec248d0cd4a&" alt="" className={styles.decorativeImage} /> */}
        </section>
    );
};

export default Competencies;