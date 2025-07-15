import FirstHeader from "./FirstHeader";
import FixedHeader from "./FixedHeader";
import FreeEstimateHeader from "./FreeEstimateHeader";
import styles from "./RequestEstimate.module.css";

export default function RequestEstimate() {
  return (
    <div>
      <FirstHeader />

      <div className={styles.fixedHeade}>
        <FreeEstimateHeader />
      </div>
    </div>
  );
}
