import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from "./sharepage/footer/footer.component";
import { routes } from './app.routes';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent]
})
export class AppComponent {
  title = 'Sanguinemeals';
}
