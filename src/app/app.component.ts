import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kg-site';
  language = 'en';
  public slides = [
    { src: "assets/carousel/img0.png" },
    { src: "assets/carousel/img1.png" },
    { src: "assets/carousel/img2.png" },
    { src: "assets/carousel/img3.png" },
    { src: "assets/carousel/img4.png" },
    { src: "assets/carousel/img5.png" }
  ];
}
