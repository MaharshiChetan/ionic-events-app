import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  tapped = 0;
  pressed = 0;

  constructor() {}

  onDidReset(resetType: string) {
    switch (resetType) {
      case 'tap':
        this.tapped = 0;
        break;
      case 'press':
        this.pressed = 0;
        break;
      default:
        this.pressed = 0;
        this.tapped = 0;
        break;
    }
  }

  onTap() {
    this.tapped++;
  }

  onPress() {
    this.pressed++;
  }

  didWin() {
    return this.tapped == 2 && this.pressed == 4;
  }
}
