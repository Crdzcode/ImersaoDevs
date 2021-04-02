class Movie{
    constructor(poster, name, rating, year, type, duration, trailer){
        this.poster = poster;
        this.name = name;
        this.rating = rating;
        this.year = year;
        this.type = type;
        this.duration = duration;
        this.trailer = trailer;
    }
}

function createElements(){
    var filmes = new Array(5);
    var poster = 'https://www.joblo.com/assets/images/oldsite/posters/images/full/interstellar-poster-space.jpg';
    var trailer = 'https://www.youtube.com/embed/zSWdZVtXT7E';
    filmes[0] = new Movie(poster, 'Interstellar', 5, 2014, 'Filme', 169, trailer);
    poster = 'https://i.pinimg.com/originals/59/9e/bb/599ebbf39dd6e27626fa11548bf3cc68.jpg';
    trailer = 'https://www.youtube.com/embed/jAy6NJ_D5vU';
    filmes[1] = new Movie(poster, 'Daredevil', 4, 2015, 'Série', 3, trailer);
    poster = 'https://i.pinimg.com/originals/e2/fd/ac/e2fdac24323a419ee9a2244662383c0f.jpg';
    trailer = 'https://www.youtube.com/embed/sfAc2U20uyg';
    filmes[2] = new Movie(poster, 'The Walking Dead', 4, 2010, 'Série', 10, trailer);
    poster = 'https://m.media-amazon.com/images/M/MV5BMTQzNTcwODEyM15BMl5BanBnXkFtZTcwMjM1MDI0OQ@@._V1_.jpg';
    trailer = 'https://www.youtube.com/embed/K0LLaybEuzA';
    filmes[3] = new Movie(poster, 'The Purge', 5, 2013, 'Filme', 85, trailer);
    poster = 'https://i.pinimg.com/originals/1b/81/91/1b8191032389313a311f09bd1bb6ac81.jpg';
    trailer = 'https://www.youtube.com/embed/Lg1wnSMhStA';
    filmes[4] = new Movie(poster, 'La Casa de Papel', 4, 2018, 'Série', 4, trailer);
    conteudo = document.getElementById('conteudo');
    filmes.forEach(element => {
        var card = document.createElement('div');
        card.classList.add('movie');
        conteudo.appendChild(card);
        var poster = document.createElement('img');
        poster.src = element.poster;
        poster.classList.add('movie-poster');
        card.appendChild(poster);
        var movieTitle = document.createElement('h2');
        movieTitle.classList.add('movie-title');
        movieTitle.textContent = element.name;
        card.appendChild(movieTitle);
        var rating = document.createElement('div');
        rating.classList.add('rating');
        card.appendChild(rating);
        for(var i = 0; i < 5; i++){
            var star = document.createElement('span');
            star.classList.add('fa');
            star.classList.add('fa-star');
            star.classList.add('star');
            if(i<element.rating){
                star.classList.add('checked');
            }
            rating.appendChild(star);
        }
        var info = document.createElement('div');
        info.classList.add('info');
        card.appendChild(info);
        var p = document.createElement('p');
        p.classList.add('description');
        p.textContent = element.year;
        info.appendChild(p);
        p.textContent = element.type;
        info.appendChild(p);
        if(element.type == 'Série'){
            p.textContent = element.duration + ' temporadas';
        }else{
            p.textContent = element.duration + ' minutos';
        }
        info.appendChild(p);
        var trailer = document.createElement('iframe');
        trailer.id = 'trailer' + element.name;
        trailer.autoplay = 1;
        trailer.loop = 1;
        trailer.controls = 0;
        trailer.classList.add('trailer');
        trailer.src = element.trailer;
        card.appendChild(trailer);
        trailer.addEventListener('mouseenter', function(event){
            trailer.style = 'opacity: 100%';
            trailer.src = element.trailer;
        });
        trailer.addEventListener('mouseleave', function(event){
            trailer.style = 'opacity: 0%';
            trailer.src = element.trailer;
        })
    })
}

function hoverMovie(trailerid){
    var trailer = document.getElementById(trailerid);
    trailer.style = 'opacity: 100%;';
    trailer.onmouseout = function(){
        trailer.style = 'opacity: 0%';
    }
}
