import { computed, inject, Injectable, signal } from "@angular/core";
import { User, UsersResponse, UserResponse } from "../interfaces/req-response";
import { HttpClient } from "@angular/common/http";
import { delay, map } from "rxjs";

interface State {
    users: User[],
    loading: boolean
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private http = inject(HttpClient);
    // con el caracter # indico que ese atributo es privado (private)
    #state = signal<State>({
        loading: true,
        users: []
    });

    public users = computed(() => this.#state().users);
    public loading = computed(() => this.#state().loading);

    constructor() {
        console.log("cargando data");
        this.http.get<UsersResponse>('https://reqres.in/api/users').pipe(delay(1500)).subscribe(resp => {
            this.#state.set({
                loading: false,
                users: resp.data
            })
        })
    } 
    
    getUserById(id:string) {
      return  this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`).pipe(
            delay(1500),
            map(resp => resp.data)
        );
    }
}