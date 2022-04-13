import "./content.css"

const Title = (props: any) => {
  return (
    <div className="title">
      {props.text}
      <br></br>
      --
    </div>
  );
}

export default Title;
