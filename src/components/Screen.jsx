import { useTemperature } from "../contexts/TemperatureContext";
import styles from "./Screen.module.css";
import RoomIcon from "@mui/icons-material/Room";

function Screen() {
  const { data, symbol } = useTemperature();
  const { city, temp, humidity, speed, weather } = data;

  return (
    <div className={styles.screen}>
      <span className={styles.location}>
        {city} <RoomIcon />
      </span>
      <span className={styles.date}>Aug 23, Tue</span>
      <div className={styles.temperature}>
        <img src="/images/icon _temperature_.svg" />
        <span>
          {temp}°{symbol}
        </span>
        <img src={`/images/${weather}.svg`} />
      </div>
      <div className={styles.humidity}>
        <span>Humidity</span>
        <span>{humidity}%</span>
      </div>
      <div className={styles.wind}>
        <span>Wind</span>
        <span>{speed}mph</span>
      </div>
    </div>
  );
}
export default Screen;
