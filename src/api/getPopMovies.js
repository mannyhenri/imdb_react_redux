const settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://api.themoviedb.org/3/movie/popular?api_key=895f97a3610d1222f30691d8d1ca1073&page=1",
  "method": "GET"
};

class Movies {
  static getAllMovies() {
    let movies = "";

    function getPopMovies(set) {
        return $.ajax(set);
    }

    getPopMovies(settings).done(function(data) {
        movies = data.results;
    }).fail(function() {
    });

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], movies));
      }, 100);
    });
  }
}

export default Movies;
