import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/user";

export function page(payload) {
  const headers = {};
  return http.post(`${apiEndpoint}/search/page`, payload, { headers });
}
