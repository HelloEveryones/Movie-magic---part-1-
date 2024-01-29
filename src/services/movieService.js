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
exports.create=(movieData)=>{
    console.log(movieData);
    movies.push(movieData);
}