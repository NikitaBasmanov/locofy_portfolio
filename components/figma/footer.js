import styles from "./footer.module.css";
const Footer = ({ copyright }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>{copyright}</div>
    </div>
  );
};

export default Footer;
