
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  theme: Theme = 'light-theme';
  
  constructor(
    @Inject(DOCUMENT) private document: Document,
     private renderer: Renderer2
) { }

ngOnInit(): void {
  this.initializeTheme();
}
switchTheme() {
  this.document.body.classList.replace(
    this.theme,
    this.theme === 'light-theme'
      ? (this.theme = 'dark-theme')
      : (this.theme = 'light-theme')
  );
}

initializeTheme = (): void =>
  this.renderer.addClass(this.document.body, this.theme);
}
document.body
const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";


export type Theme = 'light-theme' | 'dark-theme';
