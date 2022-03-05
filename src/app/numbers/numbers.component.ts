import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
})
export class NumbersComponent implements OnInit {
  counter = 0;
  constructor() {}

  ngOnInit() {}

  Tabuada(num: number) {
    let tabuada: number[] = [];
    for (let i = 1; i < 11; i++) {
      tabuada.push(num * i);
    }
    return tabuada;
  }
}
