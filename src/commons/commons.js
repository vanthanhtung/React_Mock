export const AllowedHTTPRequest = ["POST", "GET", "PUT", "DELETE"];

//redux
export const ADD = "ADD";
export const DELETE = "DELETE";
export const EDIT = "EDIT";
export const FETCH_ALL = "FETCH_ALL";

export const LANGUAGES_FETCHING_REQUEST = "LANGUAGES_FETCHING_REQUEST";
export const LANGUAGES_FETCHING_SUCCESS = "LANGUAGES_FETCHING_SUCCESS";

let showLoading = 0;
let hideLoading = 0;

export function startLoading() {
  showLoading++;
  const element = document.getElementById("loading");
  if (element) {
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    }
  }
}

export function stopLoading() {
  hideLoading++;
  const element = document.getElementById("loading");
  if (element) {
    if (!element.classList.contains("hidden")) {
      if (showLoading === hideLoading) {
        element.classList.add("hidden");
        showLoading = hideLoading = 0;
      }
    }
  }
}
