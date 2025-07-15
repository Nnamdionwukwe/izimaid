import FirstHeader from "./FirstHeader";
import FixedHeader from "./FixedHeader";
import FreeEstimateHeader from "./FreeEstimateHeader";
import OtherFooter from "./OtherFooter";
import styles from "./RequestEstimate.module.css";

export default function RequestEstimate() {
  return (
    <div>
      <FirstHeader />

      <div className={styles.fixedHeader}>
        <FreeEstimateHeader />
      </div>

      <OtherFooter />
    </div>
  );
}
