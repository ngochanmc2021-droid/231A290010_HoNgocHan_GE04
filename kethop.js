function getFilters() {
  const checked = [...document.querySelectorAll("input[type=checkbox]:checked")]
    .map(cb => cb.value);

  const keyword = document.getElementById("searchInput").value.toLowerCase();

  return { checked, keyword };
}

function filterMovies() {
  const { checked, keyword } = getFilters();

  const filtered = movies.filter(m => {
    const matchGenre = checked.length === 0 || checked.some(g => m.genre.includes(g));
    const matchName = m.title.toLowerCase().includes(keyword);

    return matchGenre && matchName;
  });

  renderMovies(filtered);
}
