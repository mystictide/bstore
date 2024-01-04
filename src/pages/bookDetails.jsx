import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { searchByID } from "../assets/js/dataHelpers";

export default function BookDetails() {
  const param = useParams();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const data = await searchByID(param.id);
      setBook(data);
      setLoading(false);
    };
    fetchBook();
  }, [param]);

  return (
    <>
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
            <>
              {book ? (
                <div className="full-width flex-column">
                  <h3 className="title">{book.volumeInfo.title}</h3>
                  <section className="book-container flex-row">
                    {book.volumeInfo.imageLinks ? (
                      <img
                        loading="lazy"
                        alt={book.title}
                        src={book.volumeInfo.imageLinks.smallThumbnail}
                      />
                    ) : (
                      <img
                        loading="lazy"
                        alt={book.volumeInfo.title}
                        src="/img404.jpg"
                      />
                    )}
                    <h5>{book.volumeInfo.title}</h5>
                    <h6>by {book.volumeInfo.authors?.join(", ")}</h6>
                  </section>
                </div>
              ) : (
                <h5>Could not fetch book information.</h5>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
