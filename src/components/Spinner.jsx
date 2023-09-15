import { CircularProgress } from "@mui/material";
import styles from "./Spinner.module.css";
import { memo } from "react";

function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <CircularProgress color="secondary" />
    </div>
  );
}

export default memo(Spinner);
