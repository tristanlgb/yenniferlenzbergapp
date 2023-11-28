import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgbCarouselModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-Obra1',
  template: '<p>About Me Component</p>',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatExpansionModule, NgbCarouselModule],
  providers: [NgbCarouselConfig], // Provide NgbCarouselConfig in the component
  templateUrl: './Obra1.component.html',
  styleUrls: ['./Obra1.component.css']
})
export class Obra1Component {
  panelOpenState = true;

	showNavigationArrows = true;

	showNavigationIndicators = false;
  images = [
    "assets/components/about-me/pic4.png",
    "assets/components/about-me/pic5.png",
    // Add more image paths as needed
  ];
}



