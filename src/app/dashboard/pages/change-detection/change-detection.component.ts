import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html',
  styles: ``
})
export default class ChangeDetectionComponent {
  public currentFramework = computed(() => `cheange detection - ${this.frameworkAsSignal().name}`)
  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  })

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  }

  constructor() {
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'react';
      this.frameworkAsSignal.update(value => ({
        ...value,
        name: 'React'
      }));
      console.log("hecho!");
      
    },3000)
  }
}
