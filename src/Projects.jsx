import styles from "./Projects.module.css";

const projectsData = [
  {
    title: "Форумы и бизнес-миссии",
    description:
      "Представительные технологические форумы с участием отраслевых лидеров рынка в области ИКТ, кибербезопасности, космической и атомной отрасли, компания выступает партнером международных экономических форумов и участвует в деятельности Межправительственных комиссий",
  },
  {
    title: "Экспорт и импорт",
    description:
      "Сопровождаем полный цикл прямых, косвенных и совместных экспортных и импортных операций продовольственной, сельскохозяйственной и иной продукции",
  },
  {
    title: "IT проекты",
    description:
      "Успешные проекты по выходу российских вендоров на зарубежные рынки с проведением анализа целевой аудитории, установления партнерства с дистрибьюторами и реализацией мультиканального маркетинга, закрепляя позиции на рынке, узнаваемость бренда и спрос на продукцию",
  },
  {
    title: "Туризм",
    description:
      "Содействуем развитию деятельности российских игроков на новых рынках, предоставляем комплексную поддержку во взаимодействии с регуляторами, создаем уникальные возможности и обеспечиваем участие на международных площадках",
  },
];

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2 className={styles.projectsTitle}>реализованные<br/>проекты</h2>
      <img
        src="/Group-17.svg"
        alt=""
        style={{ position: "absolute", width: "95%" }}
        className={styles["imgg"]}
      />
      <div className={styles.projectsContent}>
        <div className={styles.projectsList}>
          <p className={styles.projectsSubtitle}>
            Наши реализованные проекты отражают широкий спектр деятельности и
            успешное партнерство в различных секторах экономики и деловых
            коммуникаций
          </p>
          <div className={styles.projectItem} style={{ marginLeft: 180 }}>
            <h3 className={styles.projectTitle}>{projectsData[0].title}</h3>
            <div className={styles.projectSeparator}></div>
            <p className={styles.projectDescription}>
              {projectsData[0].description}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: 60,
              flexWrap: "wrap",
              marginTop: 30,
            }}
            className={styles["jg404jp"]}
          >
            {projectsData.slice(1).map((project, index) => (
              <div key={index} className={styles.projectItem}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectSeparator}></div>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
