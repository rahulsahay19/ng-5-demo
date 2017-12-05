import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {
  private movies = new BehaviorSubject<any>(['Jurassic Park', 'Independence Day', 'Die Another Day']);

  //Movie will act as observable
  movie = this.movies.asObservable();
  constructor() { }

  nextMovie(movie) {
    this.movies.next(movie);
  }
}
