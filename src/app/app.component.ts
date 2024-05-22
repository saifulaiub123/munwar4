import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { HeaderTestComponent } from "./main/header-test/header-test.component";
import { HeaderTest2Component } from "./main/header-test-2/header-test-2.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, HeaderTestComponent, HeaderTest2Component]
})
export class AppComponent {
  title = 'nikeangular';
}
