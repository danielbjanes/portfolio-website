import "./content.css"

const SubHeading = (props: any) => {
  return (
    <div className="sub-heading">
      {props.text}
      <br></br>
      --
    </div>
  );
}

export default SubHeading;
