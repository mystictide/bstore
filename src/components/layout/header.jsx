import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { PiShoppingCartFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [scrolling, setScrolling] = useState("");
  const cart = JSON.parse(localStorage.getItem("cart"));
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
    if (keyword) {
      navigate({
        pathname: "/",
        search: `?k=${keyword}`,
      });
    } else {
      navigate({
        pathname: "/",
      });
    }
  };

  return (
    <header className={`header ${scrolling}`}>
      <div className="nav">
        <h2 className="interactive">
          <button
            className="btn-function"
            type="button"
            onClick={() =>
              navigate({
                pathname: "/",
              })
            }
          >
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
        <div className="shopping">
          <button
            className="btn-function"
            type="button"
            onClick={() =>
              navigate({
                pathname: "/cart",
              })
            }
          >
            <PiShoppingCartFill />
          </button>
          <label>{cart?.length}</label>
        </div>
      </div>
    </header>
  );
}
