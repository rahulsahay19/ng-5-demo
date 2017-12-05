import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { 
    this.route.params.subscribe(res=>console.log(res.id));
  }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['']);
  }
}
