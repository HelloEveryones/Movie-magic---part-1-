const movies = [
  {
    _id: 1,
    title: "iva",
    genre: "iva",
    director: "iva",
    date: "2015",
    imageUrl: "/img/jungle-cruise.jpeg",
    rating: "6",
    description: "iva iva iva ",
  },
];

exports.getAll = () => {
  return movies.slice();
};

exports.getOne=(movieId)=>{
const movie= movies.find(movie => movie._id == movieId);
return movie;
}
exports.create = (movieData) => {
  movieData._id = movies[movies.length - 1]._id + 1;
  movies.push(movieData);
};
