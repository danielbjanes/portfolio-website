import Content from "../components/content/Content";

import type { NextPage } from "next";
import NavBar from "../components/navbar/NavBar";
const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <Content />
    </div>
  );
};

export default Home;
