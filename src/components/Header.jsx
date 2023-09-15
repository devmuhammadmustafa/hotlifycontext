import { memo } from "react";
import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <a href="#">
        <div>
          <img src="/images/Group 46.svg" />
        </div>
        <span>Hotlify</span>
      </a>
    </header>
  );
}

export default memo(Header);
