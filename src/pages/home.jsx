import { useEffect, useState } from "react";
import { getPopularBooks } from "../assets/js/dataHelpers";

export default function Home() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getPopularBooks();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  return <div>{books? console.log(books) : ""}</div>;
}
