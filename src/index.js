// var mykey = config.MY_KEY;
var secretkey = config.SECRET_KEY;

const results = document.querySelector('#results');

const searchMovies = (keyword) => {
  const apiUrl =  `http://www.omdbapi.com/?s=${keyword}&apikey=${secretkey}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach((movie) => {
        const newMovie = `<li class="list-inline-item">
        <img src="${movie.Poster}" />
        <p>${movie.Title}</p>
        </li>`
        results.insertAdjacentHTML('beforeend', newMovie);
      });
    });
}

const searchForm = document.getElementById("search-movies");
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const keyword = document.querySelector("#keyword").value;
  searchMovies(keyword);
});



