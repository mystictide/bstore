import axios from "axios";

const API_URL = "https://openlibrary.org/search.json";

export async function getPopularBooks() {
  try {
    let query ="?subject=javascript&sort=random&lang=eng&page=1&limit=10";
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
