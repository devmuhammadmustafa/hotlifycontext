import { useTemperature } from "../contexts/TemperatureContext";
import Region from "./Region";
import styles from "./Regions.module.css";
function Regions() {
  const { searchedData } = useTemperature();
  return (
    <div className={styles.regions}>
      {searchedData.map((region, i) => (
        <Region key={i} {...region} />
      ))}
    </div>
  );
}
export default Regions;
