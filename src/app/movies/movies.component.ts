import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from '../data.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  animations: [
    
        trigger('movies', [
          transition('* => *', [
            query(':enter', style({ opacity: 0 }), {optional: true}),
    
            query(':enter', stagger('300ms', [
              animate('.6s ease-in', keyframes([
                style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
                style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
                style({opacity: 1, transform: 'translateY(0)', offset: 1}),
              ]))]), {optional: true}),
    
            query(':leave', stagger('300ms', [
              animate('.6s ease-in', keyframes([
                style({opacity: 1, transform: 'translateY(0)', offset: 0}),
                style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
                style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
              ]))]), {optional: true})
          ])
        ])
    
      ]
})
export class MoviesComponent implements OnInit {
  moviesCount:number;
  btnText:string='Add a Movie!';
  initialMovie:string = 'Grease';
  movies=[];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.movie.subscribe(res=>this.movies=res);
    this.moviesCount=this.movies.length;
    this.dataService.nextMovie(this.movies);
  }

  addMovie(){
    this.movies.push(this.initialMovie);
    this.initialMovie='';
    this.moviesCount=this.movies.length;
    this.dataService.nextMovie(this.movies);
  }
  removeMovie(i){
    this.movies.splice(i,1);
    this.moviesCount=this.movies.length;
    this.dataService.nextMovie(this.movies);
  }
}
