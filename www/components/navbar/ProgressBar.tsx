import React from "react";
import styles from "./NavBar.module.css";

const ProgressBar = () => {
  React.useEffect(() => {
    window.addEventListener("scroll", moveScrollIndicator);
    window.addEventListener("resize", resizeScroll);
    const scrollIndicatorElt = document.getElementById("scrollIndicator");
    let maxHeight = window.document.body.scrollHeight - window.innerHeight;

    function resizeScroll(e: any) {
      maxHeight = window.document.body.scrollHeight - window.innerHeight;
      moveScrollIndicator(e);
    }

    function moveScrollIndicator(e: any) {
      const percentage = (window.scrollY / maxHeight) * 100;

      scrollIndicatorElt!.style.width = percentage + "%";
    }
  });

  return (
    <div>
      <div className={styles.ProgressBar} id="scrollIndicator"></div>
    </div>
  );
};

export default ProgressBar;
