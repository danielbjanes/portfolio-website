
import styles from "./Content.module.css"

const SubHeading = (props: any) => {
  return (
    <div className={styles.sub_heading}>
      {props.text}
      <br></br>
      --
    </div>
  );
}

export default SubHeading;
