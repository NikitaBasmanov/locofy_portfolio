import TopMenu from "../components/figma/top-menu";
import Person from "../components/person";
import Work from "../components/work";
import Form from "../components/form";
import Footer from "../components/figma/footer";
import styles from "./index.module.css";
const About = () => {
  return (
    <div className={styles.about}>
      <TopMenu />
      <Person
        title="Обо мне "
        subtitle="Всем привет! Меня зовут Никита, мне 20 лет и я закончил второй курс программной инж"
        buttonText="Связаться со мной"
        image="/myphoto@2x.png"
      />
      <Work />
      <Form buttonText="Отправить" />
      <Footer copyright="Никита_Басманов ©2020 Все права защищены" />
    </div>
  );
};

export default About;
