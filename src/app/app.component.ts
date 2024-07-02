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
  showModal = false;
  blob1 = 'show';
  blob2 = 'hide';
  blob3 = 'hide';

  title = "¿Sabes?";
  textMessage = [
    "Nunca imaginé que aquí en Valencia, España, iba a conocer a una niña loquilla...",
    "Una niña bastante tierna, una niña bastante trabajadora...",
    "Una niña que haría lo que sea para cumplir con sus objetivos...",
    "Una niña que sabe lo que quiere y hacia dónde va...",
    "Una niña que es el orgullo de su madre...",
    "Una niña bastante inteligente...",
    "Y sobre todo, una niña hiperarchimega hermosa...",
    "Si te preguntabas por qué me gustas, es por todo esto...",
    "Amo cada uno de esos detalles que tienes, que hacen que uno se vuelva loco.",
    "Y estoy seguro de que cumplirás todos tus sueños, porque es imposible que...",
    "no puedas ser recompensada por todo el esfuerzo que haces día a día.",
    "Este álbum es de los pocos recuerdos que tenemos...",
    "y que sin importar lo que pase en el futuro, seguramente se incrementará la cantidad de...",
    "recuerdos inolvidables en ...",
    "pueblitos mágicos, grandes ciudades, sitios arqueológicos,...",
    "monumentos arqueológicos, grandes museos, una inmensa pradera verde llena de animalitos,...",
    "las auroras boreales que tanto sueñas y todos los sueños que tengas.",
    "Sea lo que sea, Cynnn, siempre estaré allí para tí.",
    "¡Se te quiere muuuuucho!"
  ];
  currentMessage = this.textMessage[0];
  showMessage = false;
  imageSelected: string;

  routerAnimation = 'modal-in';
  counter = 0;

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
    interval(5000).subscribe(() => {
      this.currentMessage = this.textMessage[this.counter];
      this.showMessage = !this.showMessage;
      this.counter++;
    });
    interval(5000 * (this.textMessage.length + 1)).subscribe(() => {
      this.title = '!Eres la mejor¡ ♡';
    });
  }

  changeImageSelected(path: any) {
    this.imageSelected = path;
    this.showModal = true;
  }
}
