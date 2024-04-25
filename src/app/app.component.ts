import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./features/home/home.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { AboutComponent } from './features/about/about.component';
import { FooterComponent } from './shared/components/footer/footer.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, HeaderComponent,AboutComponent,FooterComponent,]
})
export class AppComponent {
  title = 'test_project';
}
