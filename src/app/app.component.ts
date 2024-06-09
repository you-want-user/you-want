import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('box1Animation', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('hide => show', [
        animate('3s ease-out')
      ]),
      transition('show => hide', [
        animate('3s ease-out')
      ])
    ]),
    trigger('box2Animation', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('hide => show', [
        animate('3s ease-out')
      ]),
      transition('show => hide', [
        animate('3s ease-out')
      ])
    ]),
    trigger('box3Animation', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('hide => show', [
        animate('3s ease-out')
      ]),
      transition('show => hide', [
        animate('3s ease-out')
      ])
    ])
  ],
})
export class AppComponent {
  blob1 = 'show';
  blob2 = 'hide';
  blob3 = 'hide';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.startAnimationCycle();
  }

  startAnimationCycle() {

    interval(10000).subscribe(() => {
      this.blob1 = 'hide';
      this.blob2 = 'show';
      this.blob3 = 'hide';
    });

    interval(20000).subscribe(() => {
      this.blob1 = 'hide';
      this.blob2 = 'hide';
      this.blob3 = 'show';
    });

    interval(30000).subscribe(() => {
      this.blob1 = 'show';
      this.blob2 = 'hide';
      this.blob3 = 'hide';
    });
  }
}
