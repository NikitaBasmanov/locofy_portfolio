import TopMenuLink from "./top-menu-link";
import styles from "./top-menu.module.css";
const TopMenu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.topmenu}>
        <TopMenuLink text="Мои работы" href="/Work" />
        <TopMenuLink text="Обо мне" href="/About" />
      </div>
    </div>
  );
};

export default TopMenu;
