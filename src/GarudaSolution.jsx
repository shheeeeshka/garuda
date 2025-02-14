import Header from './Header';
import About from './About';
import Competencies from './Competencies';
import Collaborations from './Collaborations';
import Projects from './Projects';
import Contact from './Contact';
import styles from './GarudaSolution.module.css';

const GarudaSolution = () => {
    return (
        <div className={styles.garudaSolution}>
            <Header />
            <About />
            <Competencies />
            <Collaborations />
            <Projects />
            <Contact />
        </div>
    );
};

export default GarudaSolution;