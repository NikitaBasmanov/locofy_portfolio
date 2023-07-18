import WorkItem from "./work-item";
import styles from "./work.module.css";
const Work = () => {
  return (
    <div className={styles.work}>
      <WorkItem
        image="/image@2x.png"
        title="Csv парсер на java"
        subtitle="Был предоставлен csv файл, в котором содержались данные о студентах, который нужно было правильно распарсить и ответ предоставить в виде таблицы"
        buttenText="Смотреть "
      />
      <WorkItem
        image="/image1@2x.png"
        title="Сайт на Django"
        subtitle="Была придумана идея визуальной составляющей сайта, так же построен макет, что в дальнейшем очень помогло и с работой"
        buttenText="Смотреть "
        imageWidth="306px"
        blockInfoWidth="449px"
        projectTitleWidth="450px"
        buttonBackgroundColor="#080808"
      />
    </div>
  );
};

export default Work;