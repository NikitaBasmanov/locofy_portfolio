import styles from "./person.module.css";
const Person = ({ title, subtitle, buttonText, image }) => {
  return (
    <div className={styles.person}>
      <div className={styles.blockperson}>
        <img className={styles.myphotoIcon} alt="" src={image} />
        <div className={styles.summarydescription}>
          <div className={styles.persontext}>
            <div className={styles.title}>{title}</div>
            <div className={styles.subtitle}>
              <span className={styles.span}>{subtitle}</span>
              <span className={styles.span1}>е</span>
              <span className={styles.span}>нерии</span>
            </div>
          </div>
          <a className={styles.button} autoFocus href= {"https://vk.com/id190971411"}>
            <div className={styles.textbutton}>{buttonText}</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Person;
