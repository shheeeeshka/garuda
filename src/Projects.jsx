import styles from './Projects.module.css';

const projectsData = [
    {
        title: "Форумы и бизнес-миссии",
        description: "Представительные технологические форумы с участием отраслевых лидеров рынка в области ИКТ, кибербезопасности, космической и атомной отрасли, компания выступает партнером международных экономических форумов и участвует в деятельности Межправительственных комиссий"
    },
    {
        title: "Экспорт и импорт",
        description: "Сопровождаем полный цикл прямых, косвенных и совместных экспортных и импортных операций продовольственной, сельскохозяйственной и иной продукции"
    },
    {
        title: "IT проекты",
        description: "Успешные проекты по выходу российских вендоров на зарубежные рынки с проведением анализа целевой аудитории, установления партнерства с дистрибьюторами и реализацией мультиканального маркетинга, закрепляя позиции на рынке, узнаваемость бренда и спрос на продукцию"
    },
    {
        title: "Туризм",
        description: "Содействуем развитию деятельности российских игроков на новых рынках, предоставляем комплексную поддержку во взаимодействии с регуляторами, создаем уникальные возможности и обеспечиваем участие на международных площадках"
    }
];

const Projects = () => {
    return (
        <section className={styles.projects}>
            <div className={styles.projectsContent}>
                <h2 className={styles.projectsTitle}>реализованные проекты</h2>
                <p className={styles.projectsSubtitle}>
                    Наши реализованные проекты отражают широкий спектр деятельности и успешное партнерство в различных секторах экономики и деловых коммуникаций
                </p>
                <div className={styles.projectsList}>
                    {projectsData.map((project, index) => (
                        <div key={index} className={styles.projectItem}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <div className={styles.projectSeparator}></div>
                            <p className={styles.projectDescription}>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;