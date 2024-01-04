import axios from "axios";

// const API_URL = "https://openlibrary.org/search.json";
const API_URL = "https://www.googleapis.com/books/v1/volumes";

export async function getPopularBooks(max) {
  try {
    let query = `?q=subject:javascript&orderBy=newest&maxResults=${max}`;
    var config = {
      method: "get",
      url: API_URL + query,
      headers: {
        "Content-Type": "application/json",
      },
    };
    var data = await axios(config)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        let err = { error: true, message: error?.response.data };
        return err;
      });
    return data;
  } catch (error) {
    return true;
  }
}
