import React from "react";
import styles from "./styles.module.css";

const Wrapper = ({content}) => {
    return(
        <div className={styles.container}>{content}</div>
    )
}

export default Wrapper;