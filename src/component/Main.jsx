import { useState } from "react";
import styles from "./Main.module.css";

export default function Main() {
  //SENDING TO BACKEND
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectBedRoomsValue, setSelectBedRoomsValue] = useState("");
  const [selectBathRoomsValue, setSelectBathRoomsValue] = useState("");

  const [
    lightCommercialSelectedOfficeValue,
    setLightCommercialSelectedOfficeValue,
  ] = useState("");

  const [
    lightCommercialSelectedOfficeBathRoomsValue,
    setLightCommercialSelectedOfficeBathRoomsValue,
  ] = useState("");

  const [lightCommercialRecurring, setLightCommercialRecurring] =
    useState("weekly");

  const [lightCommercialOneTimeClean, setLightCommercialOneTimeClean] =
    useState("yes");

  //NORMAL TOGGLE STATE
  const [selectBedRooms, setSelectBedRooms] = useState(false);
  const [selectBathRooms, setSelectBathRooms] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState(false);
  const [selectedOfficeBathRooms, setSelectedOfficeBathRooms] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [residential, setResidential] = useState(true);
  const [recurring, setRecurring] = useState(true);
  const [oneTime, setOneTime] = useState(false);
  const [lightCommercial, setLightCommercial] = useState(false);
  const [moveInOut, setMoveInOut] = useState(true);
  const [oneWeek, setOneWeek] = useState(true);
  const [oneTimeClean, setOneTimeClean] = useState(false);

  function handleResidential() {
    setResidential(true);
    setLightCommercial(false);
    setSelectedOffice(false);
    setSelectedOfficeBathRooms(false);
  }

  function handleCommercial() {
    setResidential(false);
    setOneTime(false);
    setSelectBedRooms(false);
    setSelectBathRooms(false);
    // setRecurring(false);
    setLightCommercial(true);
  }

  function handleClickOneTime() {
    setOneTime(true);
    setRecurring(false);
  }

  function handleRecurring() {
    setOneTime(false);
    setRecurring(true);
  }

  function handleClickOneTime2() {
    // setOneTime(true);
    // setRecurring(false);
  }

  function handleRecurring2() {
    // setOneTime(false);
    // setRecurring(true);
  }

  function handleOneWeek() {
    setOneWeek(true);
    setOneTimeClean(false);
  }

  function handleOneTimeClean() {
    setOneTimeClean(true);
    setOneWeek(false);
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

  function handleSelectedBedRoomsValueNone() {
    setSelectBedRoomsValue("none");
    setSelectBedRooms(false);
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

  function handleSelectedBathRoomsValueNone() {
    setSelectBathRoomsValue("none");
    setSelectBathRooms(false);
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

  //LIGHT COMMERCIAL OFFICES
  //LIGHT COMMERCIAL OFFICES
  //LIGHT COMMERCIAL OFFICES
  //LIGHT COMMERCIAL OFFICES
  //LIGHT COMMERCIAL OFFICES

  function handleLightCommercialSelectedOffice() {
    setSelectedOffice((is) => !is);
    setSelectedOfficeBathRooms(false);
  }

  function lightCommercialSelectedOfficeValueNone() {
    setLightCommercialSelectedOfficeValue("none");
    setSelectedOffice(false);
  }
  function lightCommercialSelectedOfficeValue1() {
    setLightCommercialSelectedOfficeValue(1);
    setSelectedOffice(false);
  }
  function lightCommercialSelectedOfficeValue2() {
    setLightCommercialSelectedOfficeValue(2);
    setSelectedOffice(false);
  }
  function lightCommercialSelectedOfficeValue3() {
    setLightCommercialSelectedOfficeValue(3);
    setSelectedOffice(false);
  }
  function lightCommercialSelectedOfficeValue4() {
    setLightCommercialSelectedOfficeValue(4);
    setSelectedOffice(false);
  }
  function lightCommercialSelectedOfficeValue5() {
    setLightCommercialSelectedOfficeValue(5);
    setSelectedOffice(false);
  }

  ///LIGHT COMMERCIAL OFFICES BATHROOM
  //LIGHT COMMERCIAL OFFICES ATHROOM
  ///LIGHT COMMERCIAL OFFICES BATHROOM
  ///LIGHT COMMERCIAL OFFICES BATHROOM
  ///LIGHT COMMERCIAL OFFICES BATHROOM
  ///LIGHT COMMERCIAL OFFICES BATHROOM

  function handleLightCommercialSelectedOfficeBathRooms() {
    setSelectedOfficeBathRooms((is) => !is);
    setSelectedOffice(false);
  }

  function handlelightCommercialSelectedOfficeBathRoomsValueNone() {
    setLightCommercialSelectedOfficeBathRoomsValue("None");
    setSelectedOfficeBathRooms(false);
  }
  function handlelightCommercialSelectedOfficeBathRoomsValue1() {
    setLightCommercialSelectedOfficeBathRoomsValue(1);
    setSelectedOfficeBathRooms(false);
  }
  function handlelightCommercialSelectedOfficeBathRoomsValue2() {
    setLightCommercialSelectedOfficeBathRoomsValue(2);
    setSelectedOfficeBathRooms(false);
  }
  function handlelightCommercialSelectedOfficeBathRoomsValue3() {
    setLightCommercialSelectedOfficeBathRoomsValue(3);
    setSelectedOfficeBathRooms(false);
  }
  function handlelightCommercialSelectedOfficeBathRoomsValue4() {
    setLightCommercialSelectedOfficeBathRoomsValue(4);
    setSelectedOfficeBathRooms(false);
  }
  function handlelightCommercialSelectedOfficeBathRoomsValue5() {
    setLightCommercialSelectedOfficeBathRoomsValue(5);
    setSelectedOfficeBathRooms(false);
  }

  //LIGHT COMMERCIAL RECURRING
  //LIGHT COMMERCIAL RECURRING
  //LIGHT COMMERCIAL RECURRING
  //LIGHT COMMERCIAL RECURRING
  //LIGHT COMMERCIAL RECURRING
  //LIGHT COMMERCIAL RECURRING
  function handleWeekly() {
    setLightCommercialRecurring("weekly");
    setLightCommercialOneTimeClean("");
    setLightCommercialOneTimeClean("");
  }

  function handleOtherWeek() {
    setLightCommercialRecurring("everyOtherWeek");
    setLightCommercialOneTimeClean("");
    setLightCommercialOneTimeClean("");
  }
  function handle4Weeks() {
    setLightCommercialRecurring("onceIn4Weeks");
    setLightCommercialOneTimeClean("");
    setLightCommercialOneTimeClean("");
  }

  //ONE TIME CLEAN
  //ONE TIME CLEAN
  //ONE TIME CLEAN
  function handleYes() {
    setLightCommercialOneTimeClean("yes");
    setLightCommercialRecurring("");
    setLightCommercialRecurring("");
    setLightCommercialRecurring("");
  }
  function handleNo() {
    setLightCommercialOneTimeClean("no");
    setLightCommercialRecurring("");
    setLightCommercialRecurring("");
    setLightCommercialRecurring("");
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
              <h4>First Name* {firstName} </h4>
            </div>

            <div className={styles.inputField}>
              <input
                type="name"
                placeholder="ex. Mike"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={styles.inputField}
              />
            </div>
          </div>

          <div>
            <div className={styles.name}>
              <h4>Last Name* {lastName} </h4>
            </div>

            <div className={styles.inputField}>
              <input
                type="name"
                placeholder="ex. Nnamdi"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={styles.inputField}
              />
            </div>
          </div>

          <div>
            <div className={styles.name}>
              <h4>Email* {email} </h4>
            </div>

            <div className={styles.inputField}>
              <input
                type="email"
                placeholder="ex. mike.nnamdi@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputField}
              />
            </div>
          </div>

          <div>
            <div className={styles.name}>
              <h4>Phone Number* {phoneNumber} </h4>
            </div>

            <div className={styles.inputField}>
              <input
                type="number"
                placeholder="ex. +234 555 555 5555"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
                onClick={handleResidential}
                className={residential ? styles.radio2 : styles.radio}
              ></p>

              <p>Residential</p>
            </div>

            <div className={styles.radioButton}>
              <p
                onClick={handleCommercial}
                className={residential ? styles.radio : styles.radio2}
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
                <div className={styles.radioButton1}>
                  <p
                    onClick={() => setMoveInOut(true)}
                    className={moveInOut ? styles.radio2 : styles.radio}
                  ></p>

                  <p>One-Time Clean</p>
                </div>

                <div className={styles.radioButton2}>
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
                    placeholder="2000"
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

                      <>{selectBedRoomsValue === "none" && <p>None</p>}</>

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
                            onClick={handleSelectedBedRoomsValueNone}
                            value={selectBedRoomsValue}
                          >
                            None
                          </p>

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

                      <>{selectBathRoomsValue === "none" && <p>None</p>}</>

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
                            onClick={handleSelectedBathRoomsValueNone}
                            value={selectBathRoomsValue}
                          >
                            None
                          </p>

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

          {lightCommercial && (
            <div className={styles.oneTime2}>
              <div>
                <h3>Office Details</h3>
              </div>

              <div>
                <div className={styles.name}>
                  <h4>Square Feet*</h4>
                </div>

                <div className={styles.inputField}>
                  <input
                    type="text"
                    placeholder="2000"
                    className={styles.inputField}
                  />
                </div>
              </div>

              {/*LIGHT COMMERCIAL  OFFICES */}
              {/*LIGHT COMMERCIAL  OFFICES */}
              {/*LIGHT COMMERCIAL  OFFICES */}
              {/*LIGHT COMMERCIAL  OFFICES */}
              {/*LIGHT COMMERCIAL  OFFICES */}
              {/*LIGHT COMMERCIAL  OFFICES */}
              {/*LIGHT COMMERCIAL  OFFICES */}
              {/*LIGHT COMMERCIAL OFFICES */}

              <div className={styles.bedroomsDivMain}>
                <div className={styles.bedroomsDiv}>
                  <div className={styles.name}>
                    <h4>Offices*</h4>
                  </div>

                  <div>
                    <div
                      onClick={handleLightCommercialSelectedOffice}
                      className={styles.select}
                    >
                      <>
                        {lightCommercialSelectedOfficeValue === "" && (
                          <p>Select</p>
                        )}
                      </>

                      <>
                        {lightCommercialSelectedOfficeValue === "none" && (
                          <p>None</p>
                        )}
                      </>

                      <>
                        {lightCommercialSelectedOfficeValue === 1 && (
                          <p>{lightCommercialSelectedOfficeValue}</p>
                        )}
                      </>

                      <>
                        {lightCommercialSelectedOfficeValue === 2 && (
                          <p>{lightCommercialSelectedOfficeValue}</p>
                        )}
                      </>

                      <>
                        {lightCommercialSelectedOfficeValue === 3 && (
                          <p>{lightCommercialSelectedOfficeValue}</p>
                        )}
                      </>

                      <>
                        {lightCommercialSelectedOfficeValue === 4 && (
                          <p>{lightCommercialSelectedOfficeValue}</p>
                        )}
                      </>

                      <>
                        {lightCommercialSelectedOfficeValue === 5 && (
                          <p>{lightCommercialSelectedOfficeValue}</p>
                        )}
                      </>

                      {selectedOffice ? <p>&uarr;</p> : <p> &darr;</p>}
                    </div>

                    {selectedOffice && (
                      <div className={styles.selectBedRoomsMain}>
                        <div className={styles.selectBedRooms}>
                          <p
                            onClick={lightCommercialSelectedOfficeValueNone}
                            value={lightCommercialSelectedOfficeValue}
                          >
                            None
                          </p>

                          <p
                            onClick={lightCommercialSelectedOfficeValue1}
                            value={lightCommercialSelectedOfficeValue}
                          >
                            1
                          </p>

                          <p
                            onClick={lightCommercialSelectedOfficeValue2}
                            value={lightCommercialSelectedOfficeValue}
                          >
                            2
                          </p>

                          <p
                            onClick={lightCommercialSelectedOfficeValue3}
                            value={lightCommercialSelectedOfficeValue}
                          >
                            3
                          </p>
                          <p
                            onClick={lightCommercialSelectedOfficeValue4}
                            value={lightCommercialSelectedOfficeValue}
                          >
                            4
                          </p>
                          <p
                            onClick={lightCommercialSelectedOfficeValue5}
                            value={lightCommercialSelectedOfficeValue}
                          >
                            5
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/*LIGHT COMMERCIAL  BATHROOM */}
                {/*LIGHT COMMERCIAL  BATHROOM */}
                {/*LIGHT COMMERCIAL  BATHROOM */}
                {/*LIGHT COMMERCIAL  BATHROOM */}
                {/*LIGHT COMMERCIAL  BATHROOM */}
                {/*LIGHT COMMERCIAL  BATHROOM */}
                {/*LIGHT COMMERCIAL  BATHROOM */}
                {/*LIGHT COMMERCIAL BATHROOM */}

                <div className={styles.bathroomsDiv}>
                  <div className={styles.name}>
                    <h4>Bathrooms*</h4>
                  </div>

                  <div>
                    <div
                      onClick={handleLightCommercialSelectedOfficeBathRooms}
                      className={styles.select}
                    >
                      <>
                        {lightCommercialSelectedOfficeBathRoomsValue === "" && (
                          <p>Select</p>
                        )}
                      </>

                      <>
                        {lightCommercialSelectedOfficeBathRoomsValue ===
                          "None" && (
                          <p>{lightCommercialSelectedOfficeBathRoomsValue}</p>
                        )}
                      </>

                      <>
                        {lightCommercialSelectedOfficeBathRoomsValue === 1 && (
                          <p>{lightCommercialSelectedOfficeBathRoomsValue}</p>
                        )}
                      </>

                      <>
                        {lightCommercialSelectedOfficeBathRoomsValue === 2 && (
                          <p>{lightCommercialSelectedOfficeBathRoomsValue}</p>
                        )}
                      </>

                      <>
                        {lightCommercialSelectedOfficeBathRoomsValue === 3 && (
                          <p>{lightCommercialSelectedOfficeBathRoomsValue}</p>
                        )}
                      </>

                      <>
                        {lightCommercialSelectedOfficeBathRoomsValue === 4 && (
                          <p>{lightCommercialSelectedOfficeBathRoomsValue}</p>
                        )}
                      </>

                      <>
                        {lightCommercialSelectedOfficeBathRoomsValue === 5 && (
                          <p>{lightCommercialSelectedOfficeBathRoomsValue}</p>
                        )}
                      </>

                      {selectedOfficeBathRooms ? <p>&uarr;</p> : <p> &darr;</p>}
                    </div>

                    {selectedOfficeBathRooms && (
                      <div className={styles.selectBedRoomsMain}>
                        <div className={styles.selectBedRooms}>
                          <p
                            onClick={
                              handlelightCommercialSelectedOfficeBathRoomsValueNone
                            }
                            value={lightCommercialSelectedOfficeBathRoomsValue}
                          >
                            None
                          </p>

                          <p
                            onClick={
                              handlelightCommercialSelectedOfficeBathRoomsValue1
                            }
                            value={lightCommercialSelectedOfficeBathRoomsValue}
                          >
                            1
                          </p>

                          <p
                            onClick={
                              handlelightCommercialSelectedOfficeBathRoomsValue2
                            }
                            value={lightCommercialSelectedOfficeBathRoomsValue}
                          >
                            2
                          </p>

                          <p
                            onClick={
                              handlelightCommercialSelectedOfficeBathRoomsValue3
                            }
                            value={lightCommercialSelectedOfficeBathRoomsValue}
                          >
                            3
                          </p>
                          <p
                            onClick={
                              handlelightCommercialSelectedOfficeBathRoomsValue4
                            }
                            value={lightCommercialSelectedOfficeBathRoomsValue}
                          >
                            4
                          </p>
                          <p
                            onClick={
                              handlelightCommercialSelectedOfficeBathRoomsValue5
                            }
                            value={lightCommercialSelectedOfficeBathRoomsValue}
                          >
                            5
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <div className={styles.type}>
                  <h4>Frequency of Cleaning*</h4>
                </div>
                <div className={styles.typeOfCleaning}>
                  <div className={styles.radioButton}>
                    <p
                      onClick={handleOneWeek}
                      className={oneWeek ? styles.radio2 : styles.radio}
                    ></p>

                    <p>Recurring</p>
                  </div>

                  <div className={styles.radioButton}>
                    <p
                      onClick={handleOneTimeClean}
                      className={oneTimeClean ? styles.radio2 : styles.radio}
                    ></p>

                    <p>One-Time Clean</p>
                  </div>
                </div>
              </div>

              {oneWeek && (
                <div>
                  <div className={styles.type}>
                    <h4>Frequency*</h4>
                  </div>

                  <div className={styles.typeOfCleaning2}>
                    <div className={styles.radioButton}>
                      <p
                        onClick={handleWeekly}
                        value={lightCommercialRecurring}
                        className={
                          lightCommercialRecurring === "weekly"
                            ? styles.radio2
                            : styles.radio
                        }
                      ></p>

                      <p>Weekly</p>
                    </div>

                    <div className={styles.radioButton}>
                      <p
                        onClick={handleOtherWeek}
                        value={lightCommercialRecurring}
                        className={
                          lightCommercialRecurring === "everyOtherWeek"
                            ? styles.radio2
                            : styles.radio
                        }
                      ></p>

                      <p>Every Other Week</p>
                    </div>

                    <div className={styles.radioButton}>
                      <p
                        onClick={handle4Weeks}
                        value={lightCommercialRecurring}
                        className={
                          lightCommercialRecurring === "onceIn4Weeks"
                            ? styles.radio2
                            : styles.radio
                        }
                      ></p>

                      <p>Once Every 4 Weeks</p>
                    </div>
                  </div>
                </div>
              )}

              {oneTimeClean && (
                <div>
                  <div className={styles.type}>
                    <h4>Is this a move-in/move-out clean?*</h4>
                  </div>

                  <div className={styles.typeOfCleaning}>
                    <div className={styles.radioButton}>
                      <p
                        onClick={handleYes}
                        value={lightCommercialOneTimeClean}
                        className={
                          lightCommercialOneTimeClean === "yes"
                            ? styles.radio2
                            : styles.radio
                        }
                      ></p>

                      <p>Yes</p>
                    </div>

                    <div className={styles.radioButton}>
                      <p
                        onClick={handleNo}
                        value={lightCommercialOneTimeClean}
                        className={
                          lightCommercialOneTimeClean === "no"
                            ? styles.radio2
                            : styles.radio
                        }
                      ></p>

                      <p>No</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className={styles.fullMain}>
        <div>
          <img
            className={styles.image}
            src="https://i.pinimg.com/736x/49/dd/29/49dd29ae47323d64550d02d174cd765e.jpg"
          />
        </div>

        <div className={styles.full}>
          <h4>Our full house cleaning includes everything on this list:</h4>
        </div>

        <div className={styles.checkMarkFooterDiv}>
          <p className={styles.checkMarkFooter}>&#10004;</p>

          <p>Dust baseboards, light fixtures, furniture, sills</p>
        </div>

        <div className={styles.checkMarkFooterDiv}>
          <p className={styles.checkMarkFooter}>&#10004;</p>

          <p>Vacuum/Mop all floors, carpets, and stairs</p>
        </div>

        <div className={styles.checkMarkFooterDiv}>
          <p className={styles.checkMarkFooter}>&#10004;</p>

          <p>Clean showers, tubs, toilets, and sinks</p>
        </div>

        <div className={styles.checkMarkFooterDiv}>
          <p className={styles.checkMarkFooter}>&#10004;</p>

          <p>Clean mirrors, glass, counters, and tile</p>
        </div>

        <div className={styles.checkMarkFooterDiv}>
          <p className={styles.checkMarkFooter}>&#10004;</p>

          <p>Dust all furniture and furnishings</p>
        </div>

        <div className={styles.checkMarkFooterDiv}>
          <p className={styles.checkMarkFooter}>&#10004;</p>

          <p>And much more!</p>
        </div>
      </div>

      <div className={styles.privacy}>
        <p>
          By entering your email address, you agree to receive emails about
          services, updates or promotions, and you agree to the{" "}
          <span className={styles.span}>Terms</span> and{" "}
          <span className={styles.span}> Privacy Policy</span>. You may
          unsubscribe at any time.
        </p>
      </div>

      <div className={styles.submitButton}>
        <h4>Submit and Continue</h4>

        <p>&rarr;</p>
      </div>

      <div>
        <p className={styles.term}>
          No longer-term contracts. No pressure. Cancel anytime!
        </p>
      </div>
    </div>
  );
}
