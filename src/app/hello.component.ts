import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello', // nome da tag
  template: `<h1>Hello {{name}}!</h1>`, //o que vai aparecer no seletor
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string; //pode ser informado na tag
}
