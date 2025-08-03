import { useState } from "react";
import styles from "./Main.module.css";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [residential, setResidential] = useState(true);
  const [recurring, setRecurring] = useState(true);
  const [oneTime, setOneTime] = useState(false);

  return (
    <div className={styles.mainDiv}>
      <div>
        <div className={styles.checkMarkMain}>
          <p className={styles.checkMark}>&#10004;</p>

          <p className={styles.borderLine}></p>

          {isOpen ? (
            <p className={styles.checkMark}> &#10004;</p>
          ) : (
            <p className={styles.checkMark1}></p>
          )}
        </div>

        <div className={styles.started}>
          <p>Let's get started!</p>
        </div>

        <div>
          <div className={styles.star}>
            <p>*Indicates a required field</p>
          </div>

          <div>
            <div className={styles.name}>
              <h4>First Name*</h4>
            </div>

            <div className={styles.inputField}>
              <input
                type="text"
                placeholder="ex. Mike"
                className={styles.inputField}
              />
            </div>
          </div>

          <div>
            <div className={styles.name}>
              <h4>Last Name*</h4>
            </div>

            <div className={styles.inputField}>
              <input
                type="text"
                placeholder="ex. Nnamdi"
                className={styles.inputField}
              />
            </div>
          </div>

          <div>
            <div className={styles.name}>
              <h4>Email*</h4>
            </div>

            <div className={styles.inputField}>
              <input
                type="text"
                placeholder="ex. mike.nnamdi@example.com"
                className={styles.inputField}
              />
            </div>
          </div>

          <div>
            <div className={styles.name}>
              <h4>Phone Number*</h4>
            </div>

            <div className={styles.inputField}>
              <input
                type="text"
                placeholder="ex. +234 555 555 5555"
                className={styles.inputField}
              />
            </div>
          </div>

          <div className={styles.yesDiv}>
            <div className={styles.checkbox}>
              <input type="checkbox" />
            </div>

            <div className={styles.yes}>
              <p>Yes! You can text me service reminders and other messages.</p>
            </div>
          </div>

          <div className={styles.privacy}>
            <p>
              By checking this box, I agree to opt in to receive automated SMS
              and/or MMS messages from IziMaid, an IziBest company, and its
              franchisees to the provided mobile number(s). Message & data rates
              may apply. Message frequency varies. View{" "}
              <span className={styles.span}>Terms</span> and{" "}
              <span className={styles.span}> Privacy Policy</span>. Reply STOP
              to opt out of future messages. Reply HELP for help.
            </p>
          </div>

          <div>
            <div className={styles.name}>
              <h4>ZIP Code*</h4>
            </div>

            <div className={styles.inputField}>
              <input
                type="text"
                placeholder="ex. 900001"
                className={styles.inputField}
              />
            </div>
          </div>

          <div>
            <div className={styles.name}>
              <h4>Service Address*</h4>
            </div>

            <div className={styles.inputField}>
              <input
                type="text"
                placeholder="ex. 1234 Example St Abuja, FCT"
                className={styles.inputField}
              />
            </div>
          </div>

          <div>
            <div className={styles.name}>
              <h4>Apartment/Suite (optional)</h4>
            </div>

            <div className={styles.inputField}>
              <input
                type="text"
                placeholder="ex. 123, Suite A, Unit 6B"
                className={styles.inputField}
              />
            </div>
          </div>

          <div className={styles.type}>
            <h4>Type of Cleaning*</h4>
          </div>

          <div className={styles.typeOfCleaning}>
            <div className={styles.radioButton}>
              <p
                onClick={() => setResidential(true)}
                className={residential ? styles.radio2 : styles.radio}
              ></p>

              <p>Residential</p>
            </div>

            <div className={styles.radioButton}>
              <p
                onClick={() => setResidential(false)}
                className={styles.radio}
              ></p>

              <p>Light Commercial</p>
            </div>
          </div>

          {residential && (
            <div>
              <div className={styles.type}>
                <h4>Frequency of Cleaning*</h4>
              </div>
              <div className={styles.typeOfCleaning}>
                <div className={styles.radioButton}>
                  <p
                    onClick={() => setRecurring(true)}
                    className={recurring ? styles.radio2 : styles.radio}
                  ></p>

                  <p>Recurring</p>
                </div>

                <div className={styles.radioButton}>
                  <p className={styles.radio}></p>

                  <p>One-Time Clean</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
