import { useRef } from "react";
import styles from "./Search.module.css";
import { useTemperature } from "../contexts/TemperatureContext";
function Search() {
  const { setSearch, search } = useTemperature();
  const searchInput = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const query = searchInput.current.value.trim();
    if (query.length < 2) return;
    setSearch(query);
    searchInput.current.value = "";
  }

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input placeholder={search} ref={searchInput} />
      <button>
        <img src="/images/icon _search_.svg" />
      </button>
    </form>
  );
}
export default Search;
