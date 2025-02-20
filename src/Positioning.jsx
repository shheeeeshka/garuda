import styles from "./Positioning.module.css";
import logoImg from "/logo/GARUDA_logo_Осн-светлый_на_тёмном.png";
import bgImg from "/78.svg";

const Positioning = () => {
  return (
    <section className={styles["positioning"]}>
      <div style={{ position: "relative" }}>
        <h1
          style={{
            color: "#C9BFBA",
            position: "absolute",
            top: "50%",
            left: "5%",
            fontSize: 100,
            fontWeight: 200,
          }}
          className={styles["h1h1"]}
        >
          ПОЗИЦИОНИРОВАНИЕ & МИССИЯ
        </h1>
        <img src={bgImg} alt="" style={{ height: "", width: "100vw" }} />
        <img
          src={logoImg}
          alt="About background"
          className={styles.aboutBackground}
        />
      </div>
      <div
        style={{
          display: "flex",
          color: "rgba(201, 191, 186, 1)",
          fontSize: 18,
          lineHeight: 1.4,
          marginTop: 40,
          alignItems: "start",
          height: "100%"
        }}
        className={styles["gojrgpg"]}
      >
        <div
          style={{ display: "flex", flexDirection: "column", width: "auto", gap: 10 }}
        >
          <h1
            className={styles["custom-underline"]}
            style={{
              borderBottom: "0px solid #607F96",
              paddingBottom: 7,
              marginBottom: 15,
              display: "inline-block",
              fontWeight: 300,
            }}
          >
            Позиционирование
          </h1>
          <p className={styles["subt"]}>
            Мы стремимся к надежному и взаимовыгодному партнерству, формируя
            бизнес-проекты на международных рынках, используя наработанные
            решения и стратегии.
          </p>

          <div className={styles["opoe"]}>
            <div
              style={{
                display: "flex",
                gap: 15,
                margin: "20px 0",
                alignItems: "start",
              }}
              className={styles["gijei"]}
            >
              <img src="/Star-1.svg" alt="" style={{ width: 60 }} />
              <p>
                Мы предлагаем широкие компетенции, аналитические инструменты и
                гарантируем надежность зарубежных партнеров.
              </p>
            </div>
            <div
              style={{ display: "flex", gap: 15, alignItems: "start" }}
              className={styles["gijei"]}
            >
              <img src="/Star-1.svg" alt="" style={{ width: 60 }} />
              <p>
                Обеспечиваем индивидуальный подход и формируем исключительные
                предложения исходя из целей и потребностей Заказчика.
              </p>
            </div>
          </div>
        </div>
        <div className={styles["separat"]}></div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "auto", gap: 10 }}
        >
          <h1
            className={styles["custom-underline"]}
            style={{
              borderBottom: "0px solid #607F96",
              paddingBottom: 7,
              marginBottom: 15,
              display: "inline-block",
              fontWeight: 300,
            }}
          >
            Миссия
          </h1>
          <p className={styles["subt"]}>
            Поддерживать рост и развитие совместных бизнес-инициатив. Предлагать
            комплексные решения для достижения ключевых целей и задач Вашего
            бизнеса.
          </p>

          <div className={styles["opoe"]}>
            <div
              style={{
                display: "flex",
                gap: 15,
                margin: "20px 0",
                alignItems: "start",
              }}
              className={styles["gijei"]}
            >
              <img src="/Star-1.svg" alt="" style={{ width: 60 }} />
              <p>
                Используем глубокое понимание рынков, административные ресурсы,
                надежных партнеров и возможности для развития.
              </p>
            </div>
            <div
              className={styles["gijei"]}
              style={{ display: "flex", gap: 15, alignItems: "start" }}
            >
              <img src="/Star-1.svg" alt="" style={{ width: 60 }} />
              <p>
                Наша цель — поддерживать стратегическое сотрудничество в
                различных секторах экономики, способствуя устойчивому развитию и
                сотрудничеству деловых игроков.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Positioning;
