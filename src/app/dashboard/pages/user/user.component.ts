import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../interfaces/req-response';
import { toSignal} from '@angular/core/rxjs-interop'
import { UserService } from '../../../services/users.service';
import { switchMap } from 'rxjs';


@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
  styles: ``
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private userService = inject(UserService);
  // public user = signal<User | undefined>(undefined);
  public titleLabel = computed(() => {
    if ( this.user())
       return `Información del usuario ${this.user()?.first_name} ${this.user()?.last_name}`;
    return 'Información del usuario';
  });

  public user = toSignal(
    this.route.params.pipe(
      switchMap(({id}) => this.userService.getUserById(id))
    )
  );
  constructor() {
    console.log("user: ", this.user());
    
    console.log(this.route.params);
    
  }
}
