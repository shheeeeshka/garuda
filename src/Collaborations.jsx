import styles from "./Collaborations.module.css";

const collaborationsData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/ed385e0488d74a178f255ec248d0cd4a/3bd9682ca474e19cdd949da71c008e3b6a1b019204324df846930f5920f59e53?apiKey=ed385e0488d74a178f255ec248d0cd4a&",
    title: "Экспорт/импорт",
    description:
      "Анализируем тренды, разрабатываем стратегии, оказываем поддержку на всех этапах. Реализуем комплекс мер по успешной реализации ВЭД, взаимодействуя с надежными поставщиками, обеспечивая качество и минимизацию рисков.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/ed385e0488d74a178f255ec248d0cd4a/213441059f43bdc23ab76c165d8363c8aec08097d8b177cbe85809ba79583e34?apiKey=ed385e0488d74a178f255ec248d0cd4a&",
    title: "Бизнес-миссии",
    description:
      "Компания предлагает организацию бизнес-миссий для своих партнеров. Предоставляем консалтинговую и MICE поддержку, включая планирование встреч, подбор местных компаний и решение логистических вопросов",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/ed385e0488d74a178f255ec248d0cd4a/386e7a8397ad3610fc6686e5292fd4425b913e4b6c844e06bf2b5cf86fe2393f?apiKey=ed385e0488d74a178f255ec248d0cd4a&",
    title: "Направления деятельности",
    description:
      "Управление проектами в области ИКТ и смежных отраслей, продвижение продукта на зарубежных рынках, взаимодействуем с ключевыми партнерами в высокотехнологичной, промышленной и обрабатывающей промышленности, предлагая комплексные решения и стратегии для реализации деловых интересов Заказчика.",
  },
];

const Collaborations = () => {
  return (
    <section className={styles.collaborations}>
      {/* <img src="https://cdn.builder.io/api/v1/image/assets/ed385e0488d74a178f255ec248d0cd4a/63e395c268e9d23f4d9dd05ec4c767649514f267790d79429b7feba713d50288?apiKey=ed385e0488d74a178f255ec248d0cd4a&" alt="" className={styles.decorativeImage} /> */}
      <div className={styles.collaborationsContent}>
        <div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
          <h2 className={styles.collaborationsTitle}>
            НАПРАВЛЕНИЯ
            <br />
            СОТРУДНИЧЕСТВА
          </h2>
          <p className={styles.collaborationsSubtitle}>
            Стратегические направления и задачи, реализуемые консалтинговой
            группой «Гаруда Солюшн»
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ed385e0488d74a178f255ec248d0cd4a/ede732181611033d3b55fc5bf2b1b89d6c03b4250373c9df922b4ee265586aad?apiKey=ed385e0488d74a178f255ec248d0cd4a&"
            alt="Collaborations illustration"
            className={styles.collaborationsIllustration}
          />
        </div>
        <div className={styles["separator"]}>
          <img
            src="/Group-16.svg"
            alt=""
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translate(-50%, 24px)",
              height: "100%",
            }}
          />
        </div>
        <div className={styles.collaborationsList}>
          {collaborationsData.map((collaboration, index) => (
            <div key={index} className={styles.collaborationItem}>
              <img
                src={collaboration.icon}
                alt={collaboration.title}
                className={styles.collaborationIcon}
              />
              <div className={styles.collaborationInfo}>
                <h3 className={styles.collaborationTitle}>
                  {collaboration.title}
                </h3>
                <div className={styles.collaborationSeparator}></div>
                <p className={styles.collaborationDescription}>
                  {collaboration.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <img src="https://cdn.builder.io/api/v1/image/assets/ed385e0488d74a178f255ec248d0cd4a/b598c85503350e65b72791cfa69de59ee3f24094f51a2c87baca92a1a2af115e?apiKey=ed385e0488d74a178f255ec248d0cd4a&" alt="" className={styles.decorativeImage} /> */}
    </section>
  );
};

export default Collaborations;
