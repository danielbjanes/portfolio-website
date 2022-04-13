
import styles from "../../styles/Content.module.css"

const Title = (props: any) => {
  return (
    <div className={styles.title}>
      {props.text}
      <br></br>
      --
    </div>
  );
}

export default Title;
