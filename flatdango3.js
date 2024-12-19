
fetch('db.json')
  .then(response => response.json())
  .then(data => {
      const movies = data.movies;
      movies.forEach((movie, index) => {
        
          const movieElement = document.getElementById(`movie${index + 1}`);
          movieElement.querySelector('.movie-image').src = movie.image;
          movieElement.querySelector('.movie-image').alt = movie.title;
          movieElement.querySelector('.movie-info').innerHTML = `
              <p><strong>Runtime:</strong> ${movie.runtime}</p>
              <p><strong>Showtime:</strong> ${movie.showtime}</p>
              <p><strong>Capacity:</strong> ${movie.capacity} seats</p>
              <p><strong>Tickets Remaining:</strong> ${movie.tickets_remaining}</p>
          `;
      });

      
      movies.forEach((movie, index) => {
          const button = document.getElementById(`movie${index + 1}`).querySelector('button');
          button.addEventListener('click', () => showMovieInfo(`movie${index + 1}`));
      });
  })
  .catch(error => console.error('Error loading movie data:', error));


// Function to toggle the display of movie info
function showMovieInfo(movieId) {
    const infoDiv = document.getElementById(`${movieId}-info`);
    if (infoDiv.style.display === "block") {
        infoDiv.style.display = "none";
    } else {
        infoDiv.style.display = "block";
    }
}
