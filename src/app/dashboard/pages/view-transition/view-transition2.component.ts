import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
  <app-title title="view transition 2"/>

  <section class="flex justify-end">
      <img src="https://picsum.photos/id/237/200/300" alt="Picsum" width="200" height="300" style="view-transition-name: hero1">
      <div class="fixed bottom-16 right-10 bg-blue-800 w-32  h-32 rounded" style="view-transition-name: hero2"></div>
  </section>
  `,
  styles: ``
})
export default class ViewTransitionComponent {

}
