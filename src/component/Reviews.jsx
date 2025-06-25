import { useState } from "react";
import styles from "./Reviews.module.css";

const steps = [
  "bridal1.jpg",
  "bridal3.jpg",
  "bridal4.jpg",
  "bridal5.jpg",
  "lash2.jpg",
  "lash1.jpg",
  "lash3.jpg",

  "wax4.jpg",
];

export default function Reviews() {
  const [step, setStep] = useState(1);

  function handleNext() {
    if (step < 8) setStep(step + 1);
    if (step >= 8) setStep(1);
  }

  //   setInterval(() => {
  //     handleNext();
  //   }, 6000);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
    if (step <= 1) setStep(8);
  }

  return (
    <div onClick={(e) => handlePrevious(e)} className={styles.main}>
      <div className={styles.hearMain}>
        <div className={styles.hearMainSub}>
          <h1>Hear From Our Clients</h1>
          <h4>Read More Reviews</h4>
        </div>
      </div>

      <p>{steps[step - 1]}</p>

      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-comment" aria-hidden="true"></i>
      <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
      <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
    </div>
  );
}
