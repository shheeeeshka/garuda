import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2 className={styles.contactTitle}>
        Открыты к сотрудничеству и деловым предложениям
      </h2>
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h3 className={styles.contactInfoTitle}>Контактная информация</h3>
          <div className={styles.contactDetails}>
            <div style={{ background: '#617F96', borderRadius: "90px", padding: '0px 7px', display: 'flex', height: 200, flexDirection: 'column', justifyContent: 'space-around' }}>
              <div
                style={{
                  background: "#C9BFBA",
                  padding: 3,
                  display: "grid",
                  placeContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: "80%",
                }}
              >
                <img src="/phone.svg" alt="" />
              </div>
              <div
                style={{
                  background: "#C9BFBA",
                  padding: 3,
                  display: "grid",
                  placeContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: "80%",
                }}
              >
                <img src="/mail.svg" alt="" />
              </div>
              <div
                style={{
                  background: "#C9BFBA",
                  padding: 3,
                  display: "grid",
                  placeContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: "80%",
                }}
              >
                <img src="/location.svg" alt="" />
              </div>
            </div>
            {/* <img src="https://cdn.builder.io/api/v1/image/assets/ed385e0488d74a178f255ec248d0cd4a/8998136acd9e369b2ff08cb34c664360ce39e80428b9e65a1276f8cdd3201a19?apiKey=ed385e0488d74a178f255ec248d0cd4a&" alt="Contact icon" className={styles.contactIcon} /> */}
            <div className={styles.contactText}>
              <p>+7 495 147 08 76</p>
              <p>main@garudasolution.ru</p>
              <p>Москва, Российская Федерация</p>
            </div>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/ed385e0488d74a178f255ec248d0cd4a/690bc4d3fbf13fa60069e8b03d3f3aa5b6c7483f5af830375e56ae034b6c7572?apiKey=ed385e0488d74a178f255ec248d0cd4a&"
          alt="Contact illustration"
          className={styles.contactIllustration}
        />
      </div>
    </section>
  );
};

export default Contact;
