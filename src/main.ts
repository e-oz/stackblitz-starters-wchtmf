import {
  ChangeDetectionStrategy,
  Component,
  provideExperimentalZonelessChangeDetection,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

export type Decoration = {
  readonly color?: string;
};

export type TextDecoration = Decoration & {
  readonly cssClass?: string;
};

export type TextInfo = {
  readonly text: string;
  readonly decoration?: TextDecoration;
};

export type Slide = {
  readonly texts?: TextInfo[];
};

@Component({
  selector: 'my-app',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Hello from {{ name }}!</h1>
    @if (x(); as _x) {
    @for(data of _x; track data) {
    @if (data.texts; as texts) {
    @for (txt of texts; track txt) {
      <span class="{{txt.decoration?.cssClass ?? 'text-white'}}"></span>
    }
  }
}
}
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
  x = signal<Slide[]>([]);
}

bootstrapApplication(App, {
  providers: [provideExperimentalZonelessChangeDetection()],
});
