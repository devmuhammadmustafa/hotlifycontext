import styles from "./AppLayout.module.css";
import Header from "../components/Header";
import Metric from "../components/Metric";
import TabLink from "../components/TabLink";
import Screen from "../components/Screen";
import Search from "../components/Search";
import Regions from "../components/Regions";
import { Alert } from "@mui/material";
import { useTemperature } from "../contexts/TemperatureContext";
function AppLayout() {
  const { error, setError } = useTemperature();
  return (
    <>
      {error && (
        <Alert className="alert" onClick={setError}>
          {error}
        </Alert>
      )}
      <div className={styles.app}>
        <Header />
        <Metric />
        <TabLink />
        <Search />
        <Screen />
        <Regions />
      </div>
    </>
  );
}
export default AppLayout;
