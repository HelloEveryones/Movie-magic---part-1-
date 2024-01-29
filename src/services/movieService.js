const movies= [ {
    title: 'iva',
    genre: 'iva',
    director: 'iva',
    date: '2015',
    imageUrl: 'iva',
    rating: '6',
    description: 'iva iva iva '
  }
  
  ];

  exports.getAll=()=>{
    return movies.slice();
  }
exports.create=(movieData)=>{
    movies.push(movieData);
}