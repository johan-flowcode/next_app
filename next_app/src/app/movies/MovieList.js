

import Movie from './Movie';

const getMovies = async () => {
  const res = await fetch('https://ghibliapi.vercel.app/films', {
    next: {
      revalidate: 60
    }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch the movie');
  }

  return res.json();
  
};

export default async function MovieList() {
  const movies = await getMovies();

  return (
    <div className="container  md:grid-cols-2 grid-cols-1 gap-6">
      {movies && movies.map(movie => <Movie key={movie.id} movie={movie}></Movie>)}
    </div>
  );
}