import styles from "./top-menu-link.module.css";
const TopMenuLink = ({ text, href }) => {
  return (
    <a className={styles.menuitemwork} href={href}>
      {text}
    </a>
  );
};

export default TopMenuLink;
