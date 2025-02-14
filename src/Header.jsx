import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.logoContainer}>
                    <img src="/logo/GARUDA_logo_Осн-светлый_на_тёмном.png" alt="Garuda Solution Logo" className={styles.logo} />
                    <div className={styles.companyInfo}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
                            <img src="/img/Group-15.svg" alt="" />
                            <div className={styles.companyName}>
                                <div className={styles.companyType}>КОНСАЛТИНГОВАЯ ГРУППА</div>
                                <div className={styles.companyBrand}>GARUDA<br />SOLUTION</div>
                            </div>
                        </div>
                        <div className={styles.companySlogan}>Ваши цели - наши решения</div>
                    </div>
                </div>
                <div className={styles.headerImages}>
                    <img src="/img/Group-1312.svg" alt="Decorative header image 2" className={styles.headerImage} />
                </div>
            </div>
        </header>
    );
};

export default Header;