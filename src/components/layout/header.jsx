import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="nav">
        <h2 className="interactive">
          <Link to={"/"}>Book Store</Link>
        </h2>
        <div className="search">
          <form className="flex-row">
            <input
              type="text"
              id="keyword"
              name="keyword"
              placeholder="..book search"
            />
            <button aria-label="search" type="submit" className="btn-function">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
