import { useEffect, useState } from "react";
import { getPopularBooks } from "../assets/js/dataHelpers";
import Book from "../components/books/book";

export default function Home() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getPopularBooks(15);
      setBooks(data);
    };
    fetchBooks();
  }, []);

  return (
    <>
      {books ? (
        <div className="content-wrapper">
          <div className="content">
            <div className="full-width flex-column">
              <h3 className="title">Newest books on PROGRAMMING</h3>
              <section className="book-container flex-row">
                {books.items.map((data) => (
                  <Book key={data.id} data={data} />
                ))}
              </section>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
