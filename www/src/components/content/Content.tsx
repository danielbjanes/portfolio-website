import Title from "./Title";
import "./content.css";
import SubHeading from "./SubHeading";
import Pargraph from "./Paragraph";

function Content() {
  return (
    <div className="content">
      <Title text={"Title"} />
      <Pargraph />
      <SubHeading text={"Sub Heading"} />
    </div>
  );
}

export default Content;
