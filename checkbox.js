document.addEventListener("change", e => {
  if (e.target.type === "checkbox") {
    filterMovies();
  }
});
