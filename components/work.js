import WorkItem from "./figma/work-item";
import styles from "./figma/work.module.css";
import useSWR from "swr";

const fetcher = (...args) =>fetch(...args).then((res) => res.json())



const Work = () => {
  const {data, error} =  useSWR('/api/work', fetcher)

  return (
    <div className={styles.work}>
      {
        data?.items?.map((item, index) => {
          return <WorkItem
            key={index}
            image= {item.image}
            title={item.title}
            subtitle={item.subtitle}
            buttenText={item.buttenText}
            linkText={item.linkText}
            />
        })
      }
    </div>
  );
};

export default Work;
