import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { box1Animation, box2Animation, box3Animation, fadeInOut } from './util/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ box1Animation, box2Animation, box3Animation, fadeInOut ],
})
export class AppComponent {
  title: string = 'custom-title';
  showModal = false;
  blob1 = 'show';
  blob2 = 'hide';
  blob3 = 'hide';

  textMessage = [
    "Lorem 1 ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, optio reiciendis! Architecto autem eligendi animi excepturi quo error quam nam?",
    "Lorem 2, ipsum dolor sit amet consectetur adipisicing elit. Eaque vel eos iusto numquam provident autem assumenda dolore, fugit animi fuga.",
    "Lorem 3 ipsum dolor sit amet, consectetur adipisicing elit. Ad maxime eligendi ea harum recusandae numquam ipsa, consectetur reiciendis fuga! Amet?",
    "Lorem 4 ipsum, dolor sit amet consectetur adipisicing elit. Cumque rerum magni, nam sapiente laboriosam magnam harum repudiandae omnis. Minima ducimus facere consectetur cum quae dolor eos fugit reprehenderit delectus veritatis.",
    "Lorem 5, ipsum dolor sit amet consectetur adipisicing elit. Libero, accusamus illo? Voluptas itaque ullam magni, odit modi dignissimos quasi quam!"
  ];
  currentMessage = this.textMessage[Math.floor(Math.random() * this.textMessage.length)];
  showMessage = false;
  imageSelected: string;

  routerAnimation = 'modal-in';

  constructor() { }

  ngOnInit() {
    this.startAnimationCycle();
    this.startMessageCycle();
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

  startMessageCycle() {
    interval(3000).subscribe(() => {
      this.currentMessage = this.textMessage[Math.floor(Math.random() * this.textMessage.length)];
      this.showMessage = !this.showMessage;
    });
  }

  changeImageSelected(path: any) {
    this.imageSelected = path;
    this.showModal = true;
  }
}
