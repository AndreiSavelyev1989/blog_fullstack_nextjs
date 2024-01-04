"use client";

import React, { useContext } from "react";
import styles from "./ThemeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "light"
          ? `${styles.container} ${styles.lightThemeContainer}`
          : `${styles.container} ${styles.darkThemeContainer}`
      }
      onClick={() => toggle()}
    >
      <Image src="/moon.png" width={14} height={14} />
      <Image src="/sun.png" width={14} height={14} />
      <div
        className={
          theme === "light"
            ? `${styles.circle} ${styles.lightThemeCircle}`
            : `${styles.circle} ${styles.darkThemeCircle}`
        }
      />
    </div>
  );
};
export default ThemeToggle;
