import { Component } from '@angular/core';

@Component({
  selector: 'app-header-test',
  standalone: true,
  imports: [],
  templateUrl: './header-test.component.html',
  styleUrl: './header-test.component.scss'
})
export class HeaderTestComponent {

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
