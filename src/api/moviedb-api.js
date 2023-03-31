const API_KEY = 'cedb0d61b1d63f0d25850ca71581631f';
const BASE_URL = 'https://api.themoviedb.org/3/';
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export async function getTrending() {
  try {
    const responce = await fetch(
      `${BASE_URL}trending/all/week?api_key=${API_KEY}`
    );
    if (responce.status === 200) {
      const result = await responce.json();
      return result.results.map(item => {
        return {
          id: item.id,
          name: item.name || item.title,
          poster_path: getImagePath(item.poster_path),
        };
      });
    } else return [];
  } catch (error) {
    return new Promise.reject(
      `Ошибка ${error.message} получения информации фильмам `
    );
  }
}

export async function getMovieInfo(movieID) {
  try {
    const responce = await fetch(
      `${BASE_URL}movie/${movieID}?api_key=${API_KEY}&language=en-US`
    );
    if (responce.status === 200) {
      const result = await responce.json();

      return result;
    } else return {};
  } catch (error) {
    return new Promise.reject(
      `Ошибка ${error.message} получения информации фильму ${movieID}  `
    );
  }
}
export async function getMovieReview(movieID) {
  try {
    const responce = await fetch(
      `${BASE_URL}movie/${movieID}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    if (responce.status === 200) {
      const result = await responce.json();

      return result?.results.map(({ author, content, id }) => ({
        author,
        content,
        id,
      }));
    } else return [];
  } catch (error) {
    return new Promise.reject(
      `Ошибка ${error.message} получения отзывов к фильму ${movieID}  `
    );
  }
}

export async function getMovieCredits(movieID) {
  try {
    const responce = await fetch(
      `${BASE_URL}movie/${movieID}/credits?api_key=${API_KEY}&language=en-US&page=1`
    );
    if (responce.status === 200) {
      const resp = await responce.json();
      //console.dir(resp);
      const results = resp.cast.map(item => {
        return {
          id: item.id,
          name: item.name,
          original_name: item.original_name,
          popularity: item.popularity,
          profile_path: getImagePath(item.profile_path),
          character: item.character,
        };
      });

      return results;
    } else return [];
  } catch (error) {
    return new Promise.reject(
      `Ошибка ${error.message} получения актеров фильма ${movieID}  `
    );
  }
}

export async function searchMovie(query = '') {
  try {
    if (query === '') return [];
    const responce = await fetch(
      `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    //search/movie?api_key=cedb0d61b1d63f0d25850ca71581631f&language=en-US&query=stargate&page=1&include_adult=false
    if (responce.status === 200) {
      const result = await responce.json();
      return result.results.map(item => {
        return {
          id: item.id,
          name: item.name || item.title,
          poster_path: getImagePath(item.poster_path),
        };
      });
    } else return [];
  } catch (error) {
    return new Promise.reject(
      `Ошибка ${error.message} поиска фильма по запросу ${query}`
    );
  }
}

export function getImagePath(image) {
  return image ? BASE_IMAGE_URL + image : 'https://via.placeholder.com/300x400';
}
