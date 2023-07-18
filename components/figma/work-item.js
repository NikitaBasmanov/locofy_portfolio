import { useMemo } from "react";
import styles from "./work-item.module.css";
const WorkItem = ({
  image,
  title,
  subtitle,
  buttenText,
  imageWidth,
  blockInfoWidth,
  projectTitleWidth,
  buttonBackgroundColor,
  linkText,
}) => {
  const imageIconStyle = useMemo(() => {
    return {
      width: imageWidth,
    };
  }, [imageWidth]);

  const blockInfoStyle = useMemo(() => {
    return {
      width: blockInfoWidth,
    };
  }, [blockInfoWidth]);

  const projectTitleStyle = useMemo(() => {
    return {
      width: projectTitleWidth,
    };
  }, [projectTitleWidth]);

  const buttonStyle = useMemo(() => {
    return {
      backgroundColor: buttonBackgroundColor,
    };
  }, [buttonBackgroundColor]);

  return (
    <div className={styles.projectjava}>
      <img
        className={styles.imageIcon}
        alt=""
        src={image}
        style={imageIconStyle}
      />
      <div className={styles.blockinfo} style={blockInfoStyle}>
        <div className={styles.blocktext}>
          <b className={styles.projecttitle}>{title}</b>
          <div className={styles.projecttitle1} style={projectTitleStyle}>
            {subtitle}
          </div>
        </div>
        <a className={styles.button} autoFocus style={buttonStyle} href= {linkText} >
          <div className={styles.text}>{buttenText}</div>
        </a>
      </div>
    </div>
  );
};

export default WorkItem;
