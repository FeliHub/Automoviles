import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../services/movie-api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.page.html',
  styleUrls: ['./movie-list.page.scss'],
})
export class MovieListPage implements OnInit {
  movies: any[] = [];

  constructor(private movieApiService: MovieApiService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieApiService.getTopMovies().subscribe(
      (data) => {
        console.log(data);
        this.movies = data;
      },
      (error) => {
        console.error('Error al obtener las películas:', error);
      }
    );
  }
}
