import React from 'react';
import estilo from '../components/Styles/search.module.css'
import {IoSearchOutline} from 'react-icons/io5'

export default function SearchBar({ onSearch }) {
  // acá va tu código
  function handleOnSearch(event) {
    event.preventDefault();
    if (typeof onSearch === "function") {
      const input = document.getElementById("search-bar-input");
      onSearch(input.value);
      input.value = "";
    }
  }

  return (
    <form className={estilo.searchBar} onSubmit={handleOnSearch}>
      <input placeholder="Agrega una nueva ciudad..." id="search-bar-input" />
      <button type="submit">
        <IoSearchOutline />
      </button>
    </form>
  );
}