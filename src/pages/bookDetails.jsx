import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { toast } from "react-toastify";
import { manageCart, searchByID } from "../assets/js/dataHelpers";

export default function BookDetails() {
  const param = useParams();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState(null);
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const [price, setPrice] = useState(randomNumber(5, 150));
  const storage = JSON.parse(localStorage.getItem("cart"));
  const [existing, setExisting] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const data = await searchByID(param.id);
      setBook(data);
      setExisting(storage?.find((x) => x.id === data?.id) ?? null);
      setLoading(false);
    };
    fetchBook();
  }, [storage, param]);

  const handleCart = async (remove) => {
    const cartItem = {
      id: book.id,
      book: book.volumeInfo,
      price,
    };
    await manageCart(cartItem, remove);
    if (remove) {
      toast("Removed from cart!");
      setExisting(null);
    } else {
      toast("Added to cart!");
      setExisting(cartItem);
    }
  };

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
                    <div className="book-details flex-row">
                      {book.volumeInfo.imageLinks ? (
                        <img
                          loading="lazy"
                          alt={book.volumeInfo.title}
                          src={book.volumeInfo.imageLinks.thumbnail}
                        />
                      ) : (
                        <img
                          loading="lazy"
                          alt={book.volumeInfo.title}
                          src="/img404.jpg"
                        />
                      )}
                      <div className="info flex-column">
                        <h3>{book.volumeInfo.title}</h3>
                        <h5>by {book.volumeInfo.authors?.join(", ")}</h5>
                        <h5>published by {book.volumeInfo.publisher}</h5>
                        {book.volumeInfo.averageRating ? (
                          <span className="rating">
                            <Rating
                              start={0}
                              stop={5}
                              initialRating={book.volumeInfo.averageRating}
                              emptySymbol={<FaRegStar />}
                              fullSymbol={<FaStar />}
                              fractions={2}
                              readonly={true}
                            />
                          </span>
                        ) : (
                          <h5>Unrated</h5>
                        )}
                        <span className="cart flex-column">
                          <h3>{existing ? existing?.price : price} TRY</h3>
                          <button
                            className={`btn-function ${
                              existing ? "active" : ""
                            }`}
                            type="button"
                            onClick={() =>
                              existing ? handleCart(true) : handleCart(false)
                            }
                          >
                            {existing ? "Remove from Cart" : "Add to Cart"}
                          </button>
                        </span>
                        <label>Description</label>
                        <h5>{book.volumeInfo.description}</h5>
                      </div>
                    </div>
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
