import { animate, query, state, style, transition, trigger } from '@angular/animations';

export const box1Animation = trigger('box1Animation', [
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
]);

export const box2Animation = trigger('box2Animation', [
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
]);

export const box3Animation = trigger('box3Animation', [
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

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1s', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate('1s', style({ opacity: 0 }))
  ])
]);