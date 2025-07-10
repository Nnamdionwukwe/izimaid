import styles from "./IziMaidHelp.module.css";

export default function IziMaidHelpFull() {
  return (
    <div>
      <div className={styles.services}>
        <div className={styles.mainDiv2}>
          <div className={styles.home}>
            <i class="fa-solid fa-house"></i>
          </div>

          <h4>One-Time Cleaning</h4>
          <h4>&rarr;</h4>
        </div>

        <div className={styles.mainDiv2}>
          <div className={styles.home}>
            <i class="fa fa-gift" aria-hidden="true"></i>
          </div>

          <h4>Recurring Cleans</h4>
          <h4>&rarr;</h4>
        </div>

        <div className={styles.mainDiv2}>
          <div className={styles.home}>
            <i class="fa-solid fa-house"></i>
          </div>

          <h4>Home Cleaning</h4>
          <h4>&rarr;</h4>
        </div>

        <div className={styles.mainDiv3}>
          <div className={styles.home}>
            <i class="fa fa-heartbeat" aria-hidden="true"></i>
          </div>

          <h4>Apartment and Condos</h4>
          <h4>&rarr;</h4>
        </div>
      </div>

      <div className={styles.gridMain}>
        <div className={styles.grid}>
          <div className={styles.gridDiv}>
            <img
              alt="welcome"
              src="https://img.freepik.com/premium-photo/house-cleaning-equipment-supplies-bucket_488220-3224.jpg?semt=ais_hybrid&w=740"
            />
            <div className={styles.subDiv}>
              <h3>One-Time Cleaning</h3>

              <p className={styles.para}>
                If you are preparing to host a big event, cleaning the house for
                spring, or simply trying to get ahead on cleaning chores, you
                can count on your local Molly Maid for a one-time professional
                house cleaning that refreshes your home and makes it easier to
                maintain. That way, you can spend less time cleaning and more
                time enjoying the things you love.
              </p>
              <div className={styles.learnMore}>
                <p className={styles.p}>Learn More</p>
                <p>&rarr;</p>
              </div>
            </div>

            <div className={styles.home2}>
              <i class="fa-solid fa-house"></i>
            </div>
          </div>

          <div className={styles.gridDiv}>
            <img
              alt="welcome"
              src="https://production-next-images-cdn.thumbtack.com/i/427431748070432796/width/1024.jpeg"
            />
            <div className={styles.subDiv}>
              <h3>Recurring Cleans</h3>
              <p className={styles.para}>
                We could all use some help around our homes, and when you choose
                IziMaid, you can get that help as often as you need it. Our
                regular maid services are available weekly, bi-weekly, or at a
                frequency that fits your schedule and cleaning needs.
              </p>
              <div className={styles.learnMore}>
                <p className={styles.p}>Learn More</p>
                <p>&rarr;</p>
              </div>
            </div>

            <div className={styles.home2}>
              <i class="fa fa-gift" aria-hidden="true"></i>
            </div>
          </div>

          <div className={styles.gridDiv}>
            <img
              alt="welcome"
              src="https://media.istockphoto.com/id/1340208950/vector/cleaning-workers-isolated-flat-cartoon-characters-man-and-woman-in-uniform-vector.jpg?s=612x612&w=0&k=20&c=tj9dk0o4ecIrJbJ80P_LjNbI7wnlG4bAj0ISa5ZSbbM="
            />
            <div className={styles.subDiv}>
              <h3>Home Cleaning</h3>
              <p className={styles.para}>
                Life is busy, which means you can’t always complete everything
                on your to-do list. IziMaid allows you to have a sparkling home,
                saves you valuable time, and provides the peace of mind that
                comes with knowing the job was done right. Our residential home
                cleaning service is dedicated to making your life easier.
              </p>
              <div className={styles.learnMore}>
                <p className={styles.p}>Learn More</p>
                <p>&rarr;</p>
              </div>
            </div>

            <div className={styles.home2}>
              <i class="fa-solid fa-spray-can"></i>
            </div>
          </div>

          <div className={styles.gridDiv}>
            <img
              alt="welcome"
              src="https://www.shutterstock.com/image-vector/loving-mother-hugging-her-daughter-600nw-2500342501.jpg"
            />

            <div className={styles.subDiv}>
              <h3>Apartments and Condos</h3>
              <p className={styles.para}>
                Living in an apartment or condo is all about convenience and
                perks like on-site maintenance, repair, and landscaping
                services. What if you could make apartment living even more
                convenient with regular apartment cleaning services? Imagine
                what you could do with your newfound free time
              </p>
              <div className={styles.learnMore}>
                <p className={styles.p}>Learn More</p>
                <p>&rarr;</p>
              </div>
            </div>

            <div className={styles.home2}>
              <i class="fa fa-heartbeat" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
