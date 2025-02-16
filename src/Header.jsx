import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        {/* <div className={styles.headerImages}> */}
        <img
          src="/Group-15.svg"
          alt="Decorative header image "
          className={styles.headerImage}
        />
        <img
          src="/Group-18.svg"
          alt="Decorative header image 2"
          className={styles.headerImage2}
        />
        {/* </div> */}
        <div className={styles.logoContainer}>
          <img
            src="/logo/GARUDA_logo_Осн-светлый_на_тёмном.png"
            alt="Garuda Solution Logo"
            className={styles.logo}
          />
          <div className={styles.companyInfo}>
            <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
              <img
                src="/img/Group-15.svg"
                alt=""
                style={{ height: "300px" }}
                className={styles["imggg"]}
              />
              <div className={styles.companyName}>
                <div className={styles.companyType}>КОНСАЛТИНГОВАЯ ГРУППА</div>
                <div className={styles.companyBrand}>
                  GARUDA
                  <br />
                  SOLUTION
                </div>
              </div>
            </div>
            <div className={styles.companySlogan}>Ваши цели - наши решения</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
