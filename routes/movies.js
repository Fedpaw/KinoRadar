const router = require('express').Router();
const {
  UpcomingMovies, TopRatedMovies, PopularMovies, NowPlayingMovies,
} = require('../db/models');

router.post('/', async (req, res) => {
  const dataFromApi = req.body;
  const path = 'https://image.tmdb.org/t/p/w500';
  try {
    for (movie of dataFromApi) {
      await UpcomingMovies.create({
        title: movie.title,
        original_title: movie.original_title,
        poster: path + movie.poster_path,
        release_date: movie.release_date,
        overview: movie.overview,
        vote_average: movie.vote_average,
      });
    }
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/upcoming', async (req, res) => {
  const upcomingmovies = await UpcomingMovies.findAll({
    order: [
      ['createdAt', 'ASC'],
    ],
    limit: 20,
  });
  res.render('upcomingMovies', { upcomingmovies });
});

router.post('/top', async (req, res) => {
  const dataFromApi = req.body;
  const path = 'https://image.tmdb.org/t/p/w500';
  try {
    for (movie of dataFromApi) {
      await TopRatedMovies.create({
        title: movie.title,
        original_title: movie.original_title,
        poster: path + movie.poster_path,
        release_date: movie.release_date,
        overview: movie.overview,
        vote_average: movie.vote_average,
      });
    }
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/toprated', async (req, res) => {
  const topratedmovies = await TopRatedMovies.findAll({
    order: [
      ['createdAt', 'ASC'],
    ],
    limit: 20,
  });
  res.render('topratedMovies', { topratedmovies });
});

router.post('/pop', async (req, res) => {
  const dataFromApi = req.body;
  const path = 'https://image.tmdb.org/t/p/w500';
  try {
    for (movie of dataFromApi) {
      await PopularMovies.create({
        title: movie.title,
        original_title: movie.original_title,
        poster: path + movie.poster_path,
        release_date: movie.release_date,
        overview: movie.overview,
        vote_average: movie.vote_average,
      });
    }
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/popular', async (req, res) => {
  const popularmovies = await PopularMovies.findAll({
    order: [
      ['createdAt', 'ASC'],
    ],
    limit: 20,
  });
  res.render('popularMovies', { popularmovies });
});

router.post('/now', async (req, res) => {
  const dataFromApi = req.body;
  const path = 'https://image.tmdb.org/t/p/w500';
  try {
    for (movie of dataFromApi) {
      await NowPlayingMovies.create({
        title: movie.title,
        original_title: movie.original_title,
        poster: path + movie.poster_path,
        release_date: movie.release_date,
        overview: movie.overview,
        vote_average: movie.vote_average,
      });
    }
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/nowplaying', async (req, res) => {
  const nowplayingmovies = await NowPlayingMovies.findAll({
    order: [
      ['createdAt', 'ASC'],
    ],
    limit: 20,
  });
  res.render('nowplayingMovies', { nowplayingmovies });
});

module.exports = router;
