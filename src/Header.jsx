import styles from "./Header.module.css";
import logoImg from "/logo/GARUDA_logo_Осн-светлый_на_тёмном.png";
import bgImg from "/Group-15.svg";
import exclImg from "/img/Group-15.svg";
import bgImgMob from "/Group-18.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img
          src={bgImg}
          alt="Decorative header image "
          className={styles.headerImage}
        />
        <div className={styles.headerImagesContainer}>
          <img
            src={bgImgMob}
            alt="Decorative header image 2"
            className={styles.headerImage2}
          />
        </div>
        <div className={styles.logoContainer}>
          <img
            src={logoImg}
            alt="Garuda Solution Logo"
            className={styles.logo}
          />
          <div className={styles.companyInfo}>
            <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
              <img
                src={exclImg}
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
{/* 
        <div className={styles.logoContainerMob}>
          <img
            src={logoImg}
            alt="Garuda Solution Logo"
            className={styles.logo}
          />
        </div>
        <div className={styles.companyInfoMob}>
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
          <div className={styles.companySloganMob}>
            Ваши цели - наши решения
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
