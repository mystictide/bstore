import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { getPopularBooks } from "../assets/js/dataHelpers";
import Book from "../components/books/book";
import Header from "../components/layout/header";
import Pager from "../components/layout/pager";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const [books, setBooks] = useState(null);

  useEffect(() => {
    if (!keyword) {
      const fetchBooks = async () => {
        const data = await getPopularBooks(startIndex, 15);
        setBooks(data);
        setLoading(false);
      };
      fetchBooks();
    }
  }, [keyword, startIndex, setStartIndex]);

  return (
    <>
      <Header
        keyword={keyword}
        startIndex={startIndex}
        setKeyword={setKeyword}
        setBooks={setBooks}
      />
      <div className="content-wrapper">
        <div className="content">
          {loading ? (
            <div className="loading">
              <PropagateLoader
                color="#015599"
                size={30}
                speedMultiplier={0.5}
              />
            </div>
          ) : (
            <div className="full-width flex-column">
              <h3 className="title">Featured books on PROGRAMMING</h3>
              {books ? (
                <>
                  <Pager
                    totalItems={books.totalItems}
                    startIndex={startIndex}
                    setStartIndex={setStartIndex}
                  />
                  <section className="book-container flex-row">
                    {books.items.map((data) => (
                      <Book key={data.id} data={data} />
                    ))}
                  </section>
                  <section className="flex-row">
                    <Pager
                      totalItems={books.totalItems}
                      startIndex={startIndex}
                      setStartIndex={setStartIndex}
                    />
                  </section>
                </>
              ) : (
                <h5>Could not find any books.</h5>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
