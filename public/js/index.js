const btnUpcoming = document.querySelector('#btnUpcomingFetch');
const btnTopRated = document.querySelector('#btnTopRatedFetch');
const btnPopular = document.querySelector('#btnPopularFetch');
const btnNowPlaying = document.querySelector('#btnNowPlayingFetch');
const { formFetch } = document.forms;
const movieWrapper = document.querySelector('.movieWrapper');

function inserter(data) {
  const path = 'https://image.tmdb.org/t/p/w500';
  return `
  <div class="card col-3" >
  <img class="card-img-top" src="${path + data.poster_path}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${data.title}</h5>
      <h6 class="card-title">${data.original_title}</h6>
      <p class="card-text">Дата выхода - ${data.release_date}</p>
      <p class="card-text">Описание - ${data.overview}</p>
      <p class="card-text">Рейтинг фильма - ${data.vote_average}</p>
    </div>
  </div>`;
}

formFetch?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(e.target));
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=99c1cf8690b5f1552c3e4b21f140af15&language=ru-RU&query=${formData.text}&page=1&include_adult=false`);
  const temp = await response.json();
  const data = temp.results;
  movieWrapper.innerHTML = '';
  for (el of data) {
    movieWrapper.insertAdjacentHTML('afterbegin', inserter(el));
  }
});

btnUpcoming.addEventListener('click', async (e) => {
  const api = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=99c1cf8690b5f1552c3e4b21f140af15&language=ru-RU&page=1&region=RU');
  const data = await api.json();
  const response = await fetch('/movies', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data.results),
  });
  if (response.ok) {
    window.location = '/movies/upcoming';
  }
});

btnTopRated.addEventListener('click', async (e) => {
  const api = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=99c1cf8690b5f1552c3e4b21f140af15&language=ru-RU&page=1&region=RU');
  const data = await api.json();
  console.log(data.results);
  const response = await fetch('/movies/top', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data.results),
  });
  if (response.ok) {
    window.location = '/movies/toprated';
  }
});

btnPopular.addEventListener('click', async (e) => {
  const api = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=99c1cf8690b5f1552c3e4b21f140af15&language=ru-RU&page=1&region=RU');
  const data = await api.json();
  const response = await fetch('/movies/pop', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data.results),
  });
  if (response.ok) {
    window.location = '/movies/popular';
  }
});

btnNowPlaying.addEventListener('click', async (e) => {
  const api = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=99c1cf8690b5f1552c3e4b21f140af15&language=ru-RU&page=1&region=RU');
  const data = await api.json();
  const response = await fetch('/movies/now', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data.results),
  });
  if (response.ok) {
    window.location = '/movies/nowplaying';
  }
});
