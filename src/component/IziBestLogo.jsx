import styles from "./IziBestLogo.module.css";

export default function IziBestLogo() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.containerDiv}>
          <img className={styles.logo} alt="Logo" src="izimaid.jpg" />

          <p className={styles.text}></p>

          <img className={styles.logo} alt="Logo" src="izibest.jpg" />
        </div>

        <h2 className={styles.containerh2}>
          IziMaid is part of the IziBest group of companies, family of home
          service providers.
        </h2>

        <p className={styles.containerp}>
          Searching through dozens of home service providers is a thing of the
          past. Rely on IziBest's Group of Companies, national network of
          trusted, local home service professionals for all your home service
          needs.
        </p>

        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}
