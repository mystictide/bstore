import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { searchByTitle } from "../../assets/js/dataHelpers";

export default function Header({ keyword, startIndex, setKeyword, setBooks }) {
  const [scrolling, setScrolling] = useState("");
  const isSticky = () => {
    const scrollTop = document.body.scrollTop;
    const stickyClass = scrollTop >= 50 ? "scrolling" : "";
    setScrolling(stickyClass);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky, true);
    return () => {
      window.removeEventListener("scroll", isSticky, true);
    };
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await searchByTitle(keyword, startIndex, 15);
    setBooks(data);
  };

  const reset = async () => {
    setKeyword("")
  };

  return (
    <header className={`header ${scrolling}`}>
      <div className="nav">
        <h2 className="interactive">
          <button className="btn-function" type="button" onClick={() => reset()}>
            Book Store
          </button>
        </h2>
        <div className="search">
          <form className="flex-row" onSubmit={handleSearch}>
            <input
              type="text"
              id="keyword"
              name="keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
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
