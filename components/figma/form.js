import styles from "./form.module.css";
const Form = ({ buttonText }) => {
  return (
    <div className={styles.feedback}>
      <div className={styles.inputParent}>
        <input className={styles.input} type="text" maxLength minLength />
        <button className={styles.button} autoFocus>
          <div className={styles.textbutton}>{buttonText}</div>
        </button>
      </div>
    </div>
  );
};

export default Form;