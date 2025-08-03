import { useState } from "react";
import styles from "./Main.module.css";

export default function Main() {
  const [firstName, setFirstName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [residential, setResidential] = useState(true);
  const [recurring, setRecurring] = useState(true);
  const [oneTime, setOneTime] = useState(false);
  const [moveInOut, setMoveInOut] = useState(true);

  const [selectBedRooms, setSelectBedRooms] = useState(false);
  const [selectBedRoomsValue, setSelectBedRoomsValue] = useState("");

  const [selectBathRooms, setSelectBathRooms] = useState(false);
  const [selectBathRoomsValue, setSelectBathRoomsValue] = useState("");

  function handleClickOneTime() {
    setOneTime(true);
    setRecurring(false);
  }

  function handleRecurring() {
    setOneTime(false);
    setRecurring(true);
  }

  //BEDROOM
  //BEDROOM
  //BEDROOM
  //BEDROOM
  //BEDROOM

  function handleSelectBedRooms() {
    setSelectBedRooms((is) => !is);
    setSelectBathRooms(false);
  }

  function handleSelectedBedRoomsValue1() {
    setSelectBedRoomsValue(1);
    setSelectBedRooms(false);
  }
  function handleSelectedBedRoomsValue2() {
    setSelectBedRoomsValue(2);
    setSelectBedRooms(false);
  }
  function handleSelectedBedRoomsValue3() {
    setSelectBedRoomsValue(3);
    setSelectBedRooms(false);
  }
  function handleSelectedBedRoomsValue4() {
    setSelectBedRoomsValue(4);
    setSelectBedRooms(false);
  }
  function handleSelectedBedRoomsValue5() {
    setSelectBedRoomsValue(5);
    setSelectBedRooms(false);
  }

  //BATHROOM
  //BATHROOM
  //BATHROOM
  //BATHROOM
  //BATHROOM
  //BATHROOM

  function handleSelectBathRooms() {
    setSelectBathRooms((is) => !is);
    setSelectBedRooms(false);
  }

  function handleSelectedBathRoomsValue1() {
    setSelectBathRoomsValue(1);
    setSelectBathRooms(false);
  }
  function handleSelectedBathRoomsValue2() {
    setSelectBathRoomsValue(2);
    setSelectBathRooms(false);
  }
  function handleSelectedBathRoomsValue3() {
    setSelectBathRoomsValue(3);
    setSelectBathRooms(false);
  }
  function handleSelectedBathRoomsValue4() {
    setSelectBathRoomsValue(4);
    setSelectBathRooms(false);
  }
  function handleSelectedBathRoomsValue5() {
    setSelectBathRoomsValue(5);
    setSelectBathRooms(false);
  }

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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
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
                    onClick={handleRecurring}
                    className={recurring ? styles.radio2 : styles.radio}
                  ></p>

                  <p>Recurring</p>
                </div>

                <div className={styles.radioButton}>
                  <p
                    onClick={handleClickOneTime}
                    className={oneTime ? styles.radio2 : styles.radio}
                  ></p>

                  <p>One-Time Clean</p>
                </div>
              </div>
            </div>
          )}

          {oneTime && (
            <div className={styles.oneTime}>
              <div className={styles.typeOfCleaning}>
                <div className={styles.radioButton}>
                  <p
                    onClick={() => setMoveInOut(true)}
                    className={moveInOut ? styles.radio2 : styles.radio}
                  ></p>

                  <p>One-Time Clean</p>
                </div>

                <div className={styles.radioButton}>
                  <p
                    onClick={() => setMoveInOut(false)}
                    className={moveInOut ? styles.radio : styles.radio2}
                  ></p>

                  <p>Move In/Move Out Clean</p>
                </div>
              </div>

              <div>
                <h3>Home Details</h3>
              </div>

              <div>
                <div className={styles.name}>
                  <h4>Square Feet*</h4>
                </div>

                <div className={styles.inputField}>
                  <input
                    type="text"
                    placeholder="ex. mike.nnamdi@example.com"
                    className={styles.inputField}
                  />
                </div>
              </div>

              <div className={styles.bedroomsDivMain}>
                <div className={styles.bedroomsDiv}>
                  <div className={styles.name}>
                    <h4>Bedrooms*</h4>
                  </div>

                  <div>
                    <div
                      onClick={handleSelectBedRooms}
                      className={styles.select}
                    >
                      <>{selectBedRoomsValue === "" && <p>Select</p>}</>

                      <>
                        {selectBedRoomsValue === 1 && (
                          <p>{selectBedRoomsValue}</p>
                        )}
                      </>

                      <>
                        {selectBedRoomsValue === 2 && (
                          <p>{selectBedRoomsValue}</p>
                        )}
                      </>

                      <>
                        {selectBedRoomsValue === 3 && (
                          <p>{selectBedRoomsValue}</p>
                        )}
                      </>

                      <>
                        {selectBedRoomsValue === 4 && (
                          <p>{selectBedRoomsValue}</p>
                        )}
                      </>

                      <>
                        {selectBedRoomsValue === 5 && (
                          <p>{selectBedRoomsValue}</p>
                        )}
                      </>

                      {selectBedRooms ? <p>&uarr;</p> : <p> &darr;</p>}
                    </div>

                    {selectBedRooms && (
                      <div className={styles.selectBedRoomsMain}>
                        <div className={styles.selectBedRooms}>
                          <p
                            onClick={handleSelectedBedRoomsValue1}
                            value={selectBedRoomsValue}
                          >
                            1
                          </p>

                          <p
                            onClick={handleSelectedBedRoomsValue2}
                            value={selectBedRoomsValue}
                          >
                            2
                          </p>

                          <p
                            onClick={handleSelectedBedRoomsValue3}
                            value={selectBedRoomsValue}
                          >
                            3
                          </p>
                          <p
                            onClick={handleSelectedBedRoomsValue4}
                            value={selectBedRoomsValue}
                          >
                            4
                          </p>
                          <p
                            onClick={handleSelectedBedRoomsValue5}
                            value={selectBedRoomsValue}
                          >
                            5
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* BATHROOM */}
                {/* BATHROOM */}
                {/* BATHROOM */}
                {/* BATHROOM */}
                {/* BATHROOM */}
                {/* BATHROOM */}
                {/* BATHROOM */}
                {/* BATHROOM */}

                <div className={styles.bathroomsDiv}>
                  <div className={styles.name}>
                    <h4>Bathrooms*</h4>
                  </div>

                  <div>
                    <div
                      onClick={handleSelectBathRooms}
                      className={styles.select}
                    >
                      <>{selectBathRoomsValue === "" && <p>Select</p>}</>

                      <>
                        {selectBathRoomsValue === 1 && (
                          <p>{selectBathRoomsValue}</p>
                        )}
                      </>

                      <>
                        {selectBathRoomsValue === 2 && (
                          <p>{selectBathRoomsValue}</p>
                        )}
                      </>

                      <>
                        {selectBathRoomsValue === 3 && (
                          <p>{selectBathRoomsValue}</p>
                        )}
                      </>

                      <>
                        {selectBathRoomsValue === 4 && (
                          <p>{selectBathRoomsValue}</p>
                        )}
                      </>

                      <>
                        {selectBathRoomsValue === 5 && (
                          <p>{selectBathRoomsValue}</p>
                        )}
                      </>

                      {selectBathRooms ? <p>&uarr;</p> : <p> &darr;</p>}
                    </div>

                    {selectBathRooms && (
                      <div className={styles.selectBedRoomsMain}>
                        <div className={styles.selectBedRooms}>
                          <p
                            onClick={handleSelectedBathRoomsValue1}
                            value={selectBathRoomsValue}
                          >
                            1
                          </p>

                          <p
                            onClick={handleSelectedBathRoomsValue2}
                            value={selectBathRoomsValue}
                          >
                            2
                          </p>

                          <p
                            onClick={handleSelectedBathRoomsValue3}
                            value={selectBathRoomsValue}
                          >
                            3
                          </p>
                          <p
                            onClick={handleSelectedBathRoomsValue4}
                            value={selectBathRoomsValue}
                          >
                            4
                          </p>
                          <p
                            onClick={handleSelectedBathRoomsValue5}
                            value={selectBathRoomsValue}
                          >
                            5
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
