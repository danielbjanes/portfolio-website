import Title from "./Title";
import styles from "../../styles/Content.module.css"
import SubHeading from "./SubHeading";
import Pargraph from "./Paragraph";

function Content() {
  return (
    <div className={styles.content}>
      <Title text={"Title"} />
      <Pargraph />
      <SubHeading text={"Sub Heading"} />
    </div>
  );
}

export default Content;
