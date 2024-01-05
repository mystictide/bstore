import { useState } from "react";
import { toast } from "react-toastify";

export default function Checkout({ setCheckout }) {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phone: "",
    nameOnCard: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    CVV: "",
  });
  const {
    firstname,
    lastname,
    email,
    address,
    phone,
    nameOnCard,
    cardNumber,
    expMonth,
    expYear,
    CVV,
  } = formData;

  function validateData(obj) {
    return Object.values(obj).some((x) => x !== null && x !== "");
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validateData(formData)) {
      localStorage.removeItem("cart");
      setValidated(true);
    } else {
      toast("Check for empty fields!");
    }
  };

  return (
    <>
      {validated ? (
        <div className="full-width flex-column">
          <h3 className="title">Thank you for your purchase!</h3>
        </div>
      ) : (
        <>
          <div className="full-width flex-column">
            <h3 className="title cart">
              <span style={{ marginRight: "auto" }}>Checkout</span>
              <button
                className="btn-function"
                onClick={() => setCheckout(false)}
              >
                Cancel
              </button>
            </h3>
            <div className="checkout flex-column">
              <form className="flex-row" onSubmit={onSubmit}>
                <div className="flex-column" style={{ width: "46%" }}>
                  <h3>Billing Address</h3>
                  <section className="flex-row">
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      value={firstname}
                      placeholder="First Name"
                      onChange={(e) =>
                        setFormData((prevState) => ({
                          ...prevState,
                          [e.target.name]: e.target.value,
                        }))
                      }
                    />
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={lastname}
                      placeholder="Last Name"
                      onChange={(e) =>
                        setFormData((prevState) => ({
                          ...prevState,
                          [e.target.name]: e.target.value,
                        }))
                      }
                    />
                  </section>
                  <section className="flex-row">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      placeholder="E-mail"
                      onChange={(e) =>
                        setFormData((prevState) => ({
                          ...prevState,
                          [e.target.name]: e.target.value,
                        }))
                      }
                    />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={phone}
                      placeholder="Phone number"
                      onChange={(e) =>
                        setFormData((prevState) => ({
                          ...prevState,
                          [e.target.name]: e.target.value,
                        }))
                      }
                    />
                  </section>
                  <section className="flex-column">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={address}
                      placeholder="Address"
                      onChange={(e) =>
                        setFormData((prevState) => ({
                          ...prevState,
                          [e.target.name]: e.target.value,
                        }))
                      }
                    />
                  </section>
                </div>
                <div className="flex-column" style={{ width: "47%" }}>
                  <h3>Payment</h3>
                  <section className="flex-column">
                    <input
                      type="text"
                      id="nameOnCard"
                      name="nameOnCard"
                      value={nameOnCard}
                      placeholder="Name on Card"
                      onChange={(e) =>
                        setFormData((prevState) => ({
                          ...prevState,
                          [e.target.name]: e.target.value,
                        }))
                      }
                    />
                  </section>
                  <section className="flex-row">
                    <input
                      type="text"
                      maxlength="19"
                      id="cardNumber"
                      name="cardNumber"
                      value={cardNumber}
                      placeholder="1111-2222-3333-4444"
                      onChange={(e) =>
                        setFormData((prevState) => ({
                          ...prevState,
                          [e.target.name]: e.target.value,
                        }))
                      }
                    />
                  </section>
                  <section className="flex-row">
                    <input
                      type="text"
                      id="expMonth"
                      name="expMonth"
                      maxlength="2"
                      value={expMonth}
                      placeholder="Expiry Month"
                      onChange={(e) =>
                        setFormData((prevState) => ({
                          ...prevState,
                          [e.target.name]: e.target.value,
                        }))
                      }
                    />
                    <input
                      type="text"
                      id="expYear"
                      name="expYear"
                      maxlength="4"
                      value={expYear}
                      placeholder="Expiry Year"
                      onChange={(e) =>
                        setFormData((prevState) => ({
                          ...prevState,
                          [e.target.name]: e.target.value,
                        }))
                      }
                    />
                    <input
                      type="text"
                      id="CVV"
                      name="CVV"
                      maxlength="3"
                      value={CVV}
                      placeholder="CVV"
                      onChange={(e) =>
                        setFormData((prevState) => ({
                          ...prevState,
                          [e.target.name]: e.target.value,
                        }))
                      }
                    />
                  </section>
                </div>
                <div className="flex-column confirm">
                  <button
                    className="btn-function"
                    type="submit"
                    style={{ width: "47%" }}
                  >
                    Continue to checkout
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
