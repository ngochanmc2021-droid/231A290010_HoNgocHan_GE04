const genreContainer = document.getElementById("genreFilters");

function renderGenres() {
  const genres = [...new Set(movies.flatMap(m => m.genre))];

  genres.forEach(g => {
    const div = document.createElement("div");
    div.innerHTML = `
      <input type="checkbox" value="${g}"> ${g}
    `;
    genreContainer.appendChild(div);
  });
}
