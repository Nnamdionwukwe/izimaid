import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerDiv}>
      <div className={styles.footerDiv2}>
        <img className={styles.logo} alt="Logo" src="izimaid.jpg" />

        <h2>0803 058 8779</h2>
      </div>

      <div className={styles.footerDiv3}>
        <div className={styles.footerDivSub}>
          <h3>SERVICES</h3>

          <p className={styles.para}></p>

          <p className={styles.para2}>Residential</p>

          <p className={styles.para2}>Light Commercial</p>
        </div>

        <div className={styles.footerDivSub}>
          <h3>COMPANY</h3>

          <p className={styles.para}></p>

          <p className={styles.para2}>Why Hire Us</p>

          <p className={styles.para2}>About Us</p>

          <p className={styles.para2}>Contact Us</p>

          <p className={styles.para2}>Apply Locally</p>

          <p className={styles.para2}>Aplicar Localmente</p>

          <p className={styles.para2}>Own a Franchise</p>
        </div>

        <div className={styles.footerDivSub}>
          <h3>RESOURCES</h3>

          <p className={styles.para4}></p>

          <p className={styles.para2}>Practically Spotless Blog</p>

          <p className={styles.para2}>CLeaning TIps</p>

          <p className={styles.para2}>Our Locations</p>

          <p className={styles.para2}>Site Map</p>

          <p className={styles.para2}>Corporate Home</p>

          <p className={styles.para2}>Gift Certificate</p>
        </div>
      </div>
    </div>
  );
}
