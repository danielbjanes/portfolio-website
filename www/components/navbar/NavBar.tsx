import Image from "next/image";
import React from "react";

import styles from "./NavBar.module.css";
import ProgressBar from "./ProgressBar";

const NavBar = () => {
  return (
    <div className={styles.NavWrapper}>
      <nav className={styles.NavBar}>
        <a className={styles.NavIcon} href="#">
          <Image
            className={styles.NavIcon}
            width="33.35px"
            height="33.35"
            src="/logo.svg"
            alt=""
          />
        </a>

        <ul className={styles.NavLinks}>
          <li className={styles.NavButton}>
            <a href="#">Top</a>
          </li>

          <li className={styles.NavButton}>
            <a href="#heading1">About</a>
          </li>

          <li className={styles.NavButton}>
            <a href="#heading2">Experience</a>
          </li>

          <li className={styles.NavButton}>
            <a href="#heading3">Projects</a>
          </li>
        </ul>
      </nav>

      <ProgressBar />
    </div>
  );
};

export default NavBar;
