import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.aboutContent}>
                <div className={styles.aboutBlock}>
                    <h1 className={styles.aboutTitle}>GARUDA<br />SOLUTION</h1>
                    {/* <div className={styles.separator}></div> */}
                    <p style={{ width: 600, fontSize: 22, lineHeight: 2 }}>
                        Компания «Гаруда Солюшн» — консалтинговая организация, имеющая разветвленную сеть партнеров как в России, так и за ее пределами. Мы объединяем усилия с общественными, деловыми и политическими структурами, что позволяет нам успешно реализовывать проекты любой сложности и оказывать деловое сопровождение инициативам партнеров.
                    </p>
                    <img src="/img/Group-12.svg" alt="About background" className={styles.aboutBackground} />
                </div>
                <div className={styles.aboutDescription}>
                    <img src="/logo/GARUDA_logo_Осн-светлый_на_тёмном.png" alt="Garuda Solution Logo" className={styles.logo} />
                </div>
            </div>
        </section>
    );
};

export default About;