import * as axios from "axios";

export function apiCaller(ENDPOINT, METHOD = "GET", PARAMS) {
  var API_URL = ENDPOINT;
  if (METHOD === "GET") {
    return axios
      .get(API_URL, {
        params: PARAMS
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    return axios.post(API_URL, PARAMS).catch(err => {
      console.log(err);
    });
  }
}
