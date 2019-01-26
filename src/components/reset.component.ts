import {
  Component,
  Output,
  EventEmitter,
} from '../../node_modules/@angular/core';

@Component({
  selector: 'reset-app',
  template: `
    <ion-row>
      <ion-col>
        <button ion-button small block color="danger" (click)="onReset('all')">Reset All</button>
      </ion-col>
      <ion-col>
        <button ion-button small block color="danger" (click)="onReset('tap')">Reset "Taps"</button>
      </ion-col>
      <ion-col>
        <button ion-button small block color="danger" (click)="onReset('press')">Reset "Presses"</button>
      </ion-col>
    </ion-row>
  `,
})
export class ResetComponent {
  @Output() didReset = new EventEmitter<string>();

  onReset(type: string) {
    this.didReset.emit(type);
  }
}
