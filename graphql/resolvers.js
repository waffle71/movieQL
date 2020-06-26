import { getMovies, getMoviesByRatingLimit } from './db';

const resolvers = {
  Query: {
    allMovies: () => getMovies(),
    movies: (_, { limit, rating }) => getMoviesByRatingLimit(limit, rating),
  },
};
export default resolvers;
