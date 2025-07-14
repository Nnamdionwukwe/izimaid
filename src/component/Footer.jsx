import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div>
      <div className={styles.footerDiv}>
        <img className={styles.logo} alt="Logo" src="izimaid.jpg" />

        <h2>0803 058 8779</h2>
      </div>
    </div>
  );
}
