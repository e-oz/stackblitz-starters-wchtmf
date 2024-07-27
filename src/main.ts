import {
  ChangeDetectionStrategy,
  Component,
  provideExperimentalZonelessChangeDetection,
  signal,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

export type Decoration = {
  cssClass: string;
};

export type TextInfo = {
  readonly text: string;
  readonly decoration?: string;
};

@Component({
  selector: 'my-app',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Hello from {{ name }}!</h1>    
      <span class="{{text.decoration?.cssClass ?? 'text-white'}}"></span>

    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
  text: TextInfo = {text: 'example'}
}

bootstrapApplication(App, {
  providers: [provideExperimentalZonelessChangeDetection()],
});
