import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartao-info',
  templateUrl: './cartao-info.component.html',
  styleUrls: ['./cartao-info.component.css'],
})
export class CartaoInfoComponent implements OnInit {
  @Input() titulo: string = '';

  @Input() dado: string = '';

  constructor() {}

  ngOnInit(): void {}
}
