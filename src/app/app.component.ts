import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import std2525c from 'milsymbol';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Milsymbol-Showcase';

  symbolDataUrl: string = '';
  svgBase64: string | undefined;

  constructor() { }

  createMilsymbol(sic: string): string {
      const symbol = new std2525c.Symbol(sic, {
        size: 100,
        fill: true,
        frame: true,
        colorMode: "Dark",
      });

      const svgBase = 'data:image/svg+xml;base64,' + btoa(symbol.asSVG());

      return svgBase;
  }
}
