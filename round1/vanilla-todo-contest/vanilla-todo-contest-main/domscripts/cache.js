function emptyCache() {
  window.localStorage.removeItem("_cache");
}

function updateCache(stringDataObj) {
  emptyCache();
  window.localStorage.setItem("_cache", stringDataObj);
}

function getCache() {
  return JSON.parse(localStorage.getItem("_cache"));
}

function emptySearchCache() {
  window.localStorage.removeItem("_cache_search");
}

function updateSearchCache(stringObj) {
  emptySearchCache();
  window.localStorage.setItem("_cache_search", stringObj);
}

function getSearchCache() {
  return localStorage.getItem("_cache_search");
}

function emptyInProcessFlag() {
  window.localStorage.removeItem("_in-process");
}

function updateInProcessFlag() {
  emptyInProcessFlag();
  window.localStorage.setItem("_in-process", "1");
}

function getInProcessFlag() {
  return window.localStorage.getItem("_in-process");
}
