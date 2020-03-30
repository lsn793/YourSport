import { Component, Input}  from '@angular/core';
import { QuizComponent }     from '../../quiz.component';
import { environment }          from '../../../../../environments/environment';
import {
    trigger, state, style, animateChild,
    animate, transition, query, group,
  } from '@angular/animations';


@Component({
    selector: 'quiz-component',
    templateUrl: './grid-test.html',
    styleUrls: ['./grid-test.scss'],
    animations: [
        trigger('FlyOutLoose', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('* => out', [ 
                animate('700ms 200ms ease-in', style({ transform: 'translateX(-100%)' }))
            ]),
        ]),
        trigger('Disappear', [
            state('in', style({ opacity: 1 })),
            transition('* => out', [
                animate('900ms', style({ opacity: 0 }))
            ]),
        ]),
        trigger('FlyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            // state('in', style({ opacity: 1 })),
            // transition(':enter', [
            //   style({ opacity: 0 }),
            //   animate('300ms ease-out')
            // ]),
            transition(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate('300ms ease-out')
              ]),
            transition('* => out', [ //http://cubic-bezier.com
                animate('700ms 200ms cubic-bezier(.93,-0.54,.83,.67)', style({ transform: 'translateX(-100%)' }))
            ]),
        ]),
    ],
})
/* компонент типа
вопрос-текст (не обязательно)
вопрос-картинка (не обязательно)
ответ-текст
ответ-текст
... */
export class GridTestComponent implements QuizComponent {
    @Input() question:      any;
    @Input() answers:       any;
    @Input() clicked:       any;
    @Input() animate:       any; //flag for animation - then animate=true - component grid going to be deleted
    @Input() loadComponent: any;
    answers_text:           string[] = [];
    //images:                 Array<HTMLImageElement> = [];
    path:                   string = environment.basehref_assets; //root path for assets/images
    isValid:                boolean = false; // valid answer

    constructor() {}
    
    ngOnInit() {
        this.answers_text = Object.keys(this.answers).sort(() => Math.random() - 0.5);
        //this.preload();
    }

    // preload() {
    //     for (let i = 0; i < this.images_path.length; i++) {
    //         this.images[i] = new Image();
    //         this.images[i].src = this.path + this.images_path[i];
    //     }
    // }
   
    onClick(e){
        e = e.target || e.srcElement;
        if (e.nodeName === 'DIV') {
           /*  if (e.parentNode.parentNode.style.backgroundColor === 'darkred') {
                return; //src  alreade checked like invalid (item grid  has red  style)- return    
            } */
            var validNode;
            this.isValid = this.isValidAnswer(decodeURIComponent(e.innerHTML));
            this.isValid ? validNode = null : validNode = this.getValidNode(e.parentNode);

            this.clicked(this.isValid, e, validNode); //(..., clikedNode, validNode)
        }        
    }

    animationDone(event) {       
        if (event.fromState === 'in' && event.toState === 'out' && 
                (event.triggerName === 'FlyInOut' || event.triggerName === 'FlyOutLoose')) {
            this.loadComponent();    
        }
    }

    isValidAnswer = (url: string) => {
        let obj = this.answers;
        var found = Object.keys(obj).find((key) => {
            return url.includes(key);
        })  
        return  obj[found]; 
    }

    getValidNode = (node: HTMLDivElement) => {
        var found = Object.keys(this.answers).find((key) => {
            return this.answers[key]==true;
        }) 
        
        return Array.from(node.children).find((child)=>{
            return child.innerHTML.includes(found);
        })
    }
}



