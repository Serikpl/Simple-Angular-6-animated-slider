import { Component, OnInit } from "@angular/core";
import { transition, state, style, trigger, animate } from "@angular/animations";

let second_s_translate = 100/3;
let third_s_translate = second_s_translate * 2; 

@Component({
    animations: [
        trigger('sliderState', [
          state('1', style({
            transform: 'translateX(0px)'
          })),
          state('2',   style({
            transform: `translateX(-${second_s_translate}%)`
          })),
          state('3',   style({
            transform: `translateX(-${third_s_translate}%)`
          })),
          transition('1 <=> 2', animate('400ms ease-in')),
          transition('2 <=> 3', animate('400ms ease-in')),
          transition('1 <=> 3', animate('400ms ease-out'))
        ])
      ],
    selector: 'Test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.less'],
})
export class TestComponent implements OnInit
{
    current_slide:number = 1;
    state:string = '1'; // 'first', 'second', 'third'

    constructor()
    {}

    ngOnInit()
    {    }

    next()
    {
        if(this.current_slide !== State.THIRD) {
            this.current_slide++;
        } else {
            this.current_slide = State.FIRST;
        }
        this.state = this.current_slide.toString();
    }

    prev()
    {
        if(this.current_slide !== State.FIRST) {
            this.current_slide--;
        } else {
            this.current_slide = State.THIRD;
        }
        this.state = this.current_slide.toString();
    }
}

enum State
{
    FIRST = 1,
    SECOND = 2,
    THIRD = 3
}
