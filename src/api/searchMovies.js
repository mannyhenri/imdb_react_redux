let movies = "";

class Search {
  static search(title) {

    function searchMovies(set) {
        return $.ajax(set);
    }

    const api_key = "&api_key=895f97a3610d1222f30691d8d1ca1073";

    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://api.themoviedb.org/3/search/movie?query=" + title + api_key,
      "method": "GET"
    };

    searchMovies(settings).done(function(data) {
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

export default Search;
