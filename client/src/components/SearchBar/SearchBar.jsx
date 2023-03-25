import React from "react";
import { useState } from "react";
import styles from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { getVideogamesByName } from "../../redux/actions";

const SearchBar = (props) => {
  const dispatch = useDispatch();
  const [character, setCharacter] = useState("");

  const handleInputChange = (e) => {
    setCharacter(e.target.value);
  };

  const search = (e) => {
    dispatch(getVideogamesByName(character));
    setCharacter("")
    e.preventDefault();
  };

  return (
    <div className={styles.search}>
      <form onSubmit={search}>
        <input onChange={handleInputChange} value={character} type="text" placeholder="Seach By Name" name="search" />
        <button type="submit">
          <svg fill="#fa005a" width="256px" height="256px" viewBox="0 0 1920.00 1920.00" xmlns="http://www.w3.org/2000/svg" stroke="#fa005a" strokeWidth="0.019200000000000002">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M1458.948 1305.626c104.637-136.95 167.527-307.187 167.527-492.388C1626.475 364.764 1261.711 0 813.238 0 364.764 0 0 364.764 0 813.238c0 448.473 364.764 813.237 813.238 813.237 185.201 0 355.547-62.89 492.496-167.527L1766.678 1920 1920 1766.678l-461.052-461.052Zm-645.71 103.986c-328.874 0-596.375-267.61-596.375-596.374 0-328.765 267.501-596.375 596.375-596.375 328.873 0 596.374 267.61 596.374 596.375s-267.501 596.374-596.374 596.374Z" fillRule="evenodd"></path>
            </g>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;