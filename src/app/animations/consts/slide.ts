import { trigger, state, animate, transition, style, query, stagger, animateChild } from '@angular/animations';

export const slideDown3 = trigger('slideDown3', [
    state('*', style({opacity: 1, backgroundColor: 'red', transform: 'rotate(-180deg)'})),
    transition('* => collapsed', [
       
            style({opacity: 0, transform: 'translatex(100%)'}),
            animate('1000ms', style({opacity: 1, backgroundColor: 'transparent', transform: 'translatex(-300%)'}))
        
      
    ]),
    transition('* => expanded', [ 
        query('h1', [
            stagger(100, [
               animate('2000ms', style({opacity: 1, backgroundColor: 'transparent', transform: 'rotate(-180deg)'}))
            ])
        ], { optional: true })   
       
            
       
    ])
  ]);

  export const slideDown2 = trigger('slideDown2', [
    transition('* => expanded', [
        query(':enter', [
            style({opacity: 0, transform: 'translateY(-100%)'}),
            stagger(100, animate('100ms', style({opacity: 1, transform: 'translateY(0)'})))
        ], { optional: true })
      
    ]),
    transition('* => collapsed', [    
        query(':leave', [
            //style({opacity: 0, transform: 'translateX(-10%)'}),
            stagger(100, animate('100ms', style({opacity: 0, transform: 'translateX(-100%)'})))
        ], { optional: true })
    ])
  ]);



  export const slideDown = trigger('slideDown', [
      //state('*', style({opacity: 1, transform: 'translatex(0)'})),
    transition('* => expanded', [
        query(':enter', [
            style({opacity: 0, transform: 'translateY(-100%)'}),
            stagger(100, animate('100ms', style({opacity: 1, transform: 'translateY(0)'})))
        ], { optional: true })
      
    ]),
    transition('* => collapsed', [    
        query(':leave', [
            //style({opacity: 0, transform: 'translateX(-10%)'}),
            stagger(100, animate('100ms', style({opacity: 0, transform: 'translateX(-100%)'})))
        ], { optional: true })
        
    ])

    
  ]);