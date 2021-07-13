import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/login";

export function login(payload) {
  return http.post(apiEndpoint, payload);
}
