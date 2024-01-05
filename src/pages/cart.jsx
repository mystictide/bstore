import { useState } from "react";
import { toast } from "react-toastify";
import { manageCart } from "../assets/js/dataHelpers";
import Book from "../components/books/book";
import Checkout from "../components/shopping/checkout";

export default function Cart() {
  const [checkout, setCheckout] = useState(false);
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem("cart")));
  const total = books?.reduce((sum, book) => {
    return sum + book.price;
  }, 0);

  const removeItem = async (id) => {
    await manageCart({ id }, true);
    toast("Removed from cart!");
    setBooks(JSON.parse(localStorage.getItem("cart")) ?? null);
  };

  return (
    <div className="content-wrapper">
      <div className="content">
        {checkout ? (
          <Checkout setCheckout={setCheckout} />
        ) : (
          <div className="full-width flex-column">
            <h3 className="title cart">
              {books?.length > 0 ? (
                <>
                  <span>
                    Shopping Cart ({books?.length}) <br /> {total} TRY
                  </span>
                  <button
                    className="btn-function"
                    onClick={() => setCheckout(true)}
                  >
                    Checkout
                  </button>
                </>
              ) : (
                <span style={{ marginRight: "auto" }}>Shopping Cart</span>
              )}
            </h3>
            {books?.length > 0 ? (
              <div className="shopping-cart flex-column">
                <section className="cart-info flex-column"></section>
                <section className="book-container flex-row">
                  {books.map((data) => (
                    <div
                      className="remove"
                      onClick={() => removeItem(data.id)}
                      key={data.id}
                    >
                      <Book data={data.book} price={data.price} />
                    </div>
                  ))}
                </section>
              </div>
            ) : (
              <h5>Shopping cart seems to be empty!</h5>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
