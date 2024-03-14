import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = "https://comics2film.com/images/1056/594/1/x-men-movie-poster.jpg"
  contentTitle: string = "howww"
  contentDescription: string = "agora vai"

  constructor() { }

  ngOnInit(): void {
  }

}
