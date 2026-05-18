require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require('./models/Movie');
const Actor = require('./models/Actor');

mongoose.connect(process.env.MONGODB_URI);

async function seed() {
  await Movie.deleteMany({});
  await Actor.deleteMany({});

  const actors = await Actor.insertMany([
    { name: 'Tom Hanks',        nationality: 'American', birthYear: 1956 },
    { name: 'Meryl Streep',     nationality: 'American', birthYear: 1949 },
    { name: 'Leonardo DiCaprio',nationality: 'American', birthYear: 1974 },
    { name: 'Scarlett Johansson',nationality: 'American',birthYear: 1984 },
    { name: 'Brad Pitt',        nationality: 'American', birthYear: 1963 },
    { name: 'Cate Blanchett',   nationality: 'Australian',birthYear: 1969 },
    { name: 'Denzel Washington',nationality: 'American', birthYear: 1954 },
    { name: 'Natalie Portman',  nationality: 'Israeli',  birthYear: 1981 },
    { name: 'Morgan Freeman',   nationality: 'American', birthYear: 1937 },
    { name: 'Viola Davis',      nationality: 'American', birthYear: 1965 }
  ]);

  await Movie.insertMany([
    { title: 'Forrest Gump',       year: 1994, genre: 'Drama',   budget: 55000000,  studio: 'Paramount',  runtime: 142, views: 95000, awards: 6,  actors: [actors[0]._id] },
    { title: 'The Devil Wears Prada',year:2006,genre:'Comedy',   budget: 35000000,  studio: 'Fox',        runtime: 109, views: 72000, awards: 2,  actors: [actors[1]._id] },
    { title: 'Inception',          year: 2010, genre: 'Sci-Fi',  budget: 160000000, studio: 'Warner',     runtime: 148, views: 110000,awards: 4,  actors: [actors[2]._id] },
    { title: 'Lost in Translation',year: 2003, genre: 'Drama',   budget: 4000000,   studio: 'Focus',      runtime: 102, views: 45000, awards: 3,  actors: [actors[3]._id] },
    { title: 'Fight Club',         year: 1999, genre: 'Thriller',budget: 63000000,  studio: 'Fox',        runtime: 139, views: 98000, awards: 1,  actors: [actors[4]._id] },
    { title: 'The Aviator',        year: 2004, genre: 'Drama',   budget: 110000000, studio: 'Miramax',    runtime: 170, views: 60000, awards: 5,  actors: [actors[5]._id] },
    { title: 'Training Day',       year: 2001, genre: 'Thriller',budget: 45000000,  studio: 'Warner',     runtime: 122, views: 55000, awards: 2,  actors: [actors[6]._id] },
    { title: 'Black Swan',         year: 2010, genre: 'Drama',   budget: 13000000,  studio: 'Fox',        runtime: 108, views: 70000, awards: 4,  actors: [actors[7]._id] },
    { title: 'Se7en',              year: 1995, genre: 'Thriller',budget: 33000000,  studio: 'New Line',   runtime: 127, views: 88000, awards: 1,  actors: [actors[8]._id] },
    { title: 'Fences',             year: 2016, genre: 'Drama',   budget: 24000000,  studio: 'Paramount',  runtime: 139, views: 40000, awards: 3,  actors: [actors[9]._id] },
    { title: 'Cast Away',          year: 2000, genre: 'Drama',   budget: 90000000,  studio: 'Universal',  runtime: 143, views: 75000, awards: 1,  actors: [actors[0]._id] },
    { title: 'The Iron Lady',      year: 2011, genre: 'Biography',budget:13000000,  studio: 'Pathé',      runtime: 105, views: 38000, awards: 2,  actors: [actors[1]._id] },
    { title: 'The Revenant',       year: 2015, genre: 'Adventure',budget:135000000, studio: 'Fox',        runtime: 156, views: 92000, awards: 3,  actors: [actors[2]._id] },
    { title: 'Her',                year: 2013, genre: 'Sci-Fi',  budget: 23000000,  studio: 'Warner',     runtime: 126, views: 65000, awards: 2,  actors: [actors[3]._id] },
    { title: 'Inglourious Basterds',year:2009, genre: 'War',     budget: 70000000,  studio: 'Universal',  runtime: 153, views: 85000, awards: 1,  actors: [actors[4]._id] },
    { title: 'Notes on a Scandal', year: 2006, genre: 'Drama',   budget: 14000000,  studio: 'Fox',        runtime: 92,  views: 30000, awards: 1,  actors: [actors[5]._id] },
    { title: 'Man on Fire',        year: 2004, genre: 'Action',  budget: 70000000,  studio: 'Fox',        runtime: 146, views: 68000, awards: 0,  actors: [actors[6]._id] },
    { title: 'V for Vendetta',     year: 2005, genre: 'Action',  budget: 54000000,  studio: 'Warner',     runtime: 132, views: 78000, awards: 1,  actors: [actors[7]._id] },
    { title: 'Million Dollar Baby',year: 2004, genre: 'Drama',   budget: 30000000,  studio: 'Warner',     runtime: 132, views: 52000, awards: 4,  actors: [actors[8]._id] },
    { title: 'Widows',             year: 2018, genre: 'Thriller',budget: 42000000,  studio: 'Fox',        runtime: 129, views: 44000, awards: 1,  actors: [actors[9]._id] }
  ]);

  console.log('Base de datos poblada');
  mongoose.disconnect();
}

seed();