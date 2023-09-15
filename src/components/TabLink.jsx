import { memo } from "react";
import styles from "./TabLink.module.css";

function TabLink() {
  return (
    <div className={styles.tabLink}>
      <div>
        <a className={styles.activeTab}>Today cancel edit</a>
        <a>Tomorrow cancel edit</a>
      </div>
    </div>
  );
}
export default memo(TabLink);
