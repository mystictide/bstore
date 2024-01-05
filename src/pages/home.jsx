import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { getPopularBooks, searchByTitle } from "../assets/js/dataHelpers";
import Book from "../components/books/book";
import Pager from "../components/layout/pager";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [startIndex, setStartIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [books, setBooks] = useState(null);

  useEffect(() => {
    if (!searchParams.get("k")) {
      const fetchBooks = async () => {
        const data = await getPopularBooks(startIndex, 15);
        setBooks(data);
        setLoading(false);
      };
      fetchBooks();
    } else {
      const fetchBooks = async () => {
        const data = await searchByTitle(searchParams.get("k"), startIndex, 15);
        setBooks(data);
        setLoading(false);
      };
      fetchBooks();
      setLoading(false);
    }
  }, [searchParams, startIndex, setStartIndex]);

  return (
    <div className="content-wrapper">
      <div className="content">
        {loading ? (
          <div className="loading">
            <PropagateLoader color="#015599" size={30} speedMultiplier={0.5} />
          </div>
        ) : (
          <div className="full-width flex-column">
            <h3 className="title">Featured books on PROGRAMMING</h3>
            {books?.items?.length > 0 ? (
              <>
                <section className="flex-row">
                  <Pager
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    startIndex={startIndex}
                    setStartIndex={setStartIndex}
                    totalItems={books.totalItems}
                  />
                </section>
                <section className="book-container flex-row">
                  {books.items.map((data) => (
                    <Book key={data.id} data={data.volumeInfo} />
                  ))}
                </section>
                <section className="flex-row">
                  <Pager
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    startIndex={startIndex}
                    setStartIndex={setStartIndex}
                    totalItems={books.totalItems}
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
  );
}
