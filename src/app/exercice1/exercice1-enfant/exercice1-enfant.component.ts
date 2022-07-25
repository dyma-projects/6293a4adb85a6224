import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur: number
  public result: number = 0
  @Output() compteurResult: EventEmitter<object> = new EventEmitter<object>()

  public Inc(val: number): void {
    this.compteur = this.result += val
    this.compteurResult.emit({value: this.result})
  }

  constructor() { }

  ngOnInit() {
  }

}
