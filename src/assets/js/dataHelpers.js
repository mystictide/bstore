import axios from "axios";

// const API_URL = "https://openlibrary.org/search.json";
const API_URL = "https://www.googleapis.com/books/v1/volumes";

export async function getPopularBooks(startIndex, max) {
  try {
    let query = `?q=subject:javascript&orderBy=relevance&startIndex=${startIndex}&maxResults=${max}`;
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

export async function searchByTitle(keyword, startIndex, max) {
  try {
    let query = `?q=intitle:${keyword}&orderBy=relevance&startIndex=${startIndex}&maxResults=${max}`;
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

export async function searchByID(isbn) {
  try {
    let query = `?q=isbn:${isbn}`;
    var config = {
      method: "get",
      url: API_URL + query,
      headers: {
        "Content-Type": "application/json",
      },
    };
    var data = await axios(config)
      .then(function (response) {
        return response.data.items[0];
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
