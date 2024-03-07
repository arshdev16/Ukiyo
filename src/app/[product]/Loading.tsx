import React from "react";
import styles from "./Loader.module.css";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loading;
