import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {HomeComponent} from './components/home/home.component';
import {Obra1Component} from './components/Obra1/Obra1.component';
import {Obra2Component} from './components/Obra2/Obra2.component';
import {Obra3Component} from './components/Obra3/Obra3.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
     RouterOutlet,
      ToolbarComponent,
       HomeComponent,
       Obra1Component,
       Obra2Component,
       Obra3Component,
 
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app-portfolioart';
}
