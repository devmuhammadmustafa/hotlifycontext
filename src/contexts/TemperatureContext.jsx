import axios from "axios";
import { createContext, useEffect, useContext, useReducer } from "react";
import {
  addItemToSearchedData,
  convertTemperature,
  setSearchedDataAsType,
} from "../utils";
const APP_ID = "8d348a62ee12b2bb05648ea0a4a52078";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const TemperatureContext = createContext();

const searchedData = JSON.parse(localStorage.getItem("regions"));
const initialState = {
  checked: true,
  symbol: "F",
  search: "Baku",
  data: {},
  searchedData: searchedData?.length > 0 ? searchedData : [],
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "temperature/loaded":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        searchedData: addItemToSearchedData(state.searchedData, action.payload),
        error: "",
      };
    case "temperature/type":
      return {
        ...state,
        checked: action.payload,
        symbol: action.payload ? "F" : "C",
        data: {
          ...state.data,
          temp: convertTemperature(state.data.kelvin, action.payload),
        },
        searchedData: setSearchedDataAsType(state.searchedData, action.payload),
      };
    case "temperature/search":
      return {
        ...state,
        search: action.payload,
      };
    case "temperature/error":
      return {
        ...state,
        error: "",
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
}

function TemperatureProvider({ children }) {
  const [
    { checked, symbol, search, data, searchedData, isLoading, error },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(
    function () {
      async function fetchTemperature() {
        dispatch({ type: "loading" });
        try {
          const res = await axios(`${BASE_URL}?q=${search}&appid=${APP_ID}`);

          dispatch({
            type: "temperature/loaded",
            payload: {
              city: res.data.name,
              kelvin: res.data.main.temp,
              humidity: res.data.main.humidity,
              speed: res.data.wind.speed,
              temp: convertTemperature(res.data.main.temp, checked),
              weather: res.data.weather[0].main,
            },
          });
        } catch {
          dispatch({
            type: "rejected",
            payload: "There was an error loading temperature...",
          });
        }
      }
      fetchTemperature();
    },
    [search]
  );

  function setChecked(val) {
    dispatch({
      type: "temperature/type",
      payload: val,
    });
  }

  function setSearch(val) {
    dispatch({
      type: "temperature/search",
      payload: val,
    });
  }

  function setError() {
    dispatch({
      type: "temperature/error",
    });
  }

  return (
    <TemperatureContext.Provider
      value={{
        checked,
        symbol,
        setChecked,
        setSearch,
        search,
        data,
        searchedData,
        isLoading,
        error,
        setError,
      }}
    >
      {children}
    </TemperatureContext.Provider>
  );
}

function useTemperature() {
  const context = useContext(TemperatureContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { TemperatureProvider, useTemperature };
