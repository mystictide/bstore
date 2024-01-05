import { PiShoppingCartFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const cart = JSON.parse(localStorage.getItem("cart"));

  return (
    <footer>
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
    </footer>
  );
}
