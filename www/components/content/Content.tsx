import Title from "./Title";
import styles from "./Content.module.css"
import SubHeading from "./SubHeading";
import Pargraph from "./Paragraph";

function Content() {
  return (
    <div className={styles.content}>
      <Title text={"Title"} />
      <Pargraph />
    </div>
  );
}

export default Content;
