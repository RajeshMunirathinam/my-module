import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import anime from 'src/assets/anime-master/lib/anime.js';

@Component({
  selector: 'app-dino',
  templateUrl: './dino.component.html',
  styleUrls: ['./dino.component.scss']
})
export class DinoComponent implements OnInit {
  window: Window = window;
  @ViewChild('dino') dino: ElementRef;
  jumped: boolean = false;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEventKeyPress(event: KeyboardEvent) {
    if (!this.jumped) {
      this.jump();
    }
  }
  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.jumped) {
      this.jump();
    }
  }

  constructor() { }

  ngOnInit() {
  }

  jump(): any {
    this.jumped = true;
    anime({
      targets: '.dino',
      keyframes: [
        {translateY: -100},
        {translateY: 1}
      ],
      delay: 300,
    });
    setTimeout(() => {
      this.jumped = false;
    }, 1000);
  }
}
