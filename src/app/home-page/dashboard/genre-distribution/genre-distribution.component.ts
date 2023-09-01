import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  animateChild,
} from '@angular/animations';
@Component({
  selector: 'app-genre-distribution',
  templateUrl: './genre-distribution.component.html',
  styleUrls: ['./genre-distribution.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query('@slideIn', [stagger(100, [animateChild()])], { optional: true, delay: 2400 }),
      ]),
    ]),
    trigger('leftAnimation', [
      transition('* => *', [
        query('@slideInfromRight', [stagger(200, [animateChild()])], {
          optional: true,
        }),
      ]),
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate(
          '0.35s',
          style({
            opacity: 1,
          })
        ),
      ]),
    ]),
    trigger('slideInfromRight', [
      transition(':enter', [
        style({
          transform: 'translate3d(0px, 20px,0)',
          opacity: 0,
        }),
        animate(
          '0.35s 1s',
          style({
            transform: 'translate3d(0,0,0)',
            opacity: 1,
          })
        ),
      ]),
    ]),
  ]
})
export class GenreDistributionComponent {

}
