import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div>
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

          <p className={styles.border}></p>

          <p className={styles.border2}>
            This information is not intended as an offer to sell, or the
            solicitation of an offer to buy, a franchise. It is for information
            purposes only. Currently, the following states regulate the offer
            and sale of franchises: California, Hawaii, Illinois, Indiana,
            Maryland, Michigan, Minnesota, New York, North Dakota, Oregon, Rhode
            Island, South Dakota, Virginia, Washington, and Wisconsin. If you
            are a resident of or want to locate a franchise in one of these
            states, we will not offer you a franchise unless and until we have
            complied with applicable pre-sale registration and disclosure
            requirements in your state.
          </p>

          <p className={styles.border3}>A clean you can count on.®</p>
        </div>
      </div>

      <h4>Terms of Use</h4>
    </div>
  );
}
