import { useState } from "react";
import styles from "./Faq.module.css";

export default function Faq() {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function handleClick1() {
    setIsOpen1((prev) => !prev);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
  }

  function handleClick2() {
    setIsOpen2((prev) => !prev);
    setIsOpen1(false);
    setIsOpen3(false);
    setIsOpen4(false);
  }

  function handleClick3() {
    setIsOpen3((prev) => !prev);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen4(false);
  }

  function handleClick4() {
    setIsOpen4((prev) => !prev);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    // setIsOpen1(false);
  }

  return (
    <div className={styles.main}>
      <h2>FAQ</h2>
      <div className={styles.mainSub}>
        <div onClick={handleClick1} className={styles.backed}>
          <h3>What is The Neighborly Done Right Promise®?</h3>

          {isOpen1 ? <h2>&minus;</h2> : <h1>&#43;</h1>}
        </div>

        {isOpen1 && (
          <div className={styles.residentialDIv}>
            <p className={styles.hoverMainliv1}>
              Neighborly Done Right Promise® delivered by IziMaid® ensures
              outstanding service. If something isn't right, contact us by the
              next business day and we'll make it right, at no extra cost.
              Trusted for 40+ years to get the job done right.
              <span className={styles.span}>Learn More.</span>
            </p>

            <p className={styles.hoverMainliv1}>
              Molly Maid is proud to be a Neighborly company.We're part of a
              network of home service professionals who offer trusted, friendly
              and fast home services for your entire home. From plumbing to
              electrical, appliance repair to handyman service, Neighborly has
              you covered.
              <span className={styles.span}>Learn More About Neighborly.</span>
            </p>
          </div>
        )}
      </div>

      <div className={styles.mainSub}>
        <div onClick={handleClick2} className={styles.backed}>
          <h3>Why Choose IziMaid?</h3>

          {isOpen2 ? <h2>&minus;</h2> : <h1>&#43;</h1>}
        </div>

        {isOpen2 && (
          <div className={styles.residentialDIv}>
            <p className={styles.hoverMainliv1}>
              Life is busy, which means you can’t always complete everything on
              your to-do list. Molly Maid allows you to have a sparkling home,
              saves you valuable time, and provides the peace of mind that comes
              with knowing the job was done right. Our residential home cleaning
              service is dedicated to making your life easier. We've built a
              reputation for top-notch cleaning that you can trust. Our detailed
              approach covers every room and corner, leaving no mess behind.
            </p>

            <p className={styles.hoverMainliv1}>
              You deserve a clean, comfortable space; we're here to deliver it
            </p>

            <p className={styles.hoverMainliv1}>
              As part of the Neighborly family of home service brands, we uphold
              high standards and prioritize your satisfaction. Choose Molly Maid
              for a cleaner, healthier home that allows you to focus on what
              matters most to you.
              <span className={styles.span}> Request a free estimate</span> now!
            </p>
          </div>
        )}
      </div>

      <div className={styles.mainSub}>
        <div onClick={handleClick3} className={styles.backed}>
          <h3>How long has IziMaid been in business?</h3>

          {isOpen3 ? <h2>&minus;</h2> : <h1>&#43;</h1>}
        </div>

        {isOpen3 && (
          <div className={styles.residentialDIv}>
            <p className={styles.hoverMainliv1}>
              Since 1984, customers have welcomed the trusted cleaning
              professionals from locally owned and operated IziMaid businesses
              into their homes. We’ve provided cleaning services to over a
              million customers, and want you to know that you can continue to
              rely on us to go above and beyond to provide you with a
              worry-free, top-notch cleaning service every time.
            </p>

            <p className={styles.hoverMainliv1}>
              Taking care of homes and those in them is what we do best. We
              firmly believe a healthy home is a clean home!
            </p>
          </div>
        )}
      </div>

      <div className={styles.mainSub}>
        <div onClick={handleClick4} className={styles.backed}>
          <h3>What Do We Clean?</h3>

          {isOpen4 ? <h2>&minus;</h2> : <h1>&#43;</h1>}
        </div>

        {isOpen4 && (
          <div className={styles.residentialDIv}>
            <p className={styles.hoverMainliv1}>
              IziMaid takes care of your whole home!{" "}
              <span className={styles.span}>Our Services</span> are the
              definition of comprehensive. We give your kitchen a thorough
              cleaning, and bathrooms sparkle after we're done. Your living room
              is cozy and inviting after we clean.
            </p>

            <p className={styles.hoverMainliv1}>
              All bedrooms get our attention, with beds made and dust gone. Our
              professional home cleaners ensure every room you want cleaned is a
              delight for you to come back to. If you’ve been looking for the
              best
              <span className={styles.span}>local home cleaning services</span>
              near you, IziMaid is the right choice.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
