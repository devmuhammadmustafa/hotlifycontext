import { Switch } from "@mui/material";
import styles from "./Metric.module.css";
import { useTemperature } from "../contexts/TemperatureContext";
function Metric() {
  const { checked, setChecked } = useTemperature();

  function handleChange(e) {
    setChecked(e.target.checked);
  }

  return (
    <div className={styles.metric}>
      <span>°C</span>
      <Switch
        checked={checked}
        onChange={handleChange}
        className={styles.toggle}
        value={checked}
      />
      <span>°F</span>
    </div>
  );
}
export default Metric;
