import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-[600px]', cssClass]">HeavyLoadersSlowComponent</section>
  `
})
export class HeavyLoadersSlowComponent {
  @Input({required: true}) cssClass!: string;
  constructor() {
    console.log("hola mundo");
    const start = Date.now();
    while(Date.now() - start < 3000) {
      
      
    }
    console.log("cargado");
  }
}
