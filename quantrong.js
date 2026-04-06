function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

document.getElementById("searchInput")
  .addEventListener("input", debounce(filterMovies, 400));
