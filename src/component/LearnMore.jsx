import FirstHeader from "./FirstHeader";
import FixedHeader from "./FixedHeader";
import styles from "./MainHeader.module.css";
import SubHeader from "./SubHeader";

export default function LearnMore() {
  return (
    <>
      <div className={styles.main}>
        <FirstHeader />

        <div className={styles.fixedHeader}>
          <FixedHeader />
        </div>

        <div className={styles.fixedHeadr}>
          <SubHeader />
        </div>
      </div>
    </>
  );
}
