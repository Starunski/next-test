import React from "react";
import Link from "next/link";
import styles from "./A.module.css";
export const A = ({ text, href }) => {
  return (
   
      <Link href={href}>
        <a className={styles.link}>{text}</a>
      </Link>
  );
};
