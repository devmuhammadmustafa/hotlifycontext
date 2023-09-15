import { memo } from "react";
import styles from "./Region.module.css";
function Region({ city, temp, weather }) {
  return (
    <div className={styles.region}>
      <h4>{city}</h4>
      <img src={`/images/${weather}.svg`} />
      <div>
        {temp} <sup>&deg;</sup>
      </div>
    </div>
  );
}
export default memo(Region);
