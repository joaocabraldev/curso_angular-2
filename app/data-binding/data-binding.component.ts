import { Component } from '@angular/core';

@Component({
  moduleId: module.id
  , selector: 'data-binding'
  , templateUrl: 'data-binding.component.html'
  , styleUrls: ['data-binding.component.css']
})
export class DataBindingComponent {
  constructor() {  }

  url = 'www.google.com.br';
  urlImg = 'http://www.lorempixel.com/400/200/nature';

  conteudoAtual : string = '';
  conteudoSalvo : string = '';

  isMouseOver : boolean = false;

  onClick() {
    console.info('O botão foi clicado!');
  }

  onKeyup(event:KeyboardEvent) {
    console.log(event);
    this.conteudoAtual = event.target.value;
  }

  onSave(valor:string) {
    this.conteudoSalvo = valor;
  }

  onMouseSpan() {
    this.isMouseOver = !this.isMouseOver;
  }
}
