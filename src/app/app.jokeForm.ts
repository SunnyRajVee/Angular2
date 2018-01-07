import { Component,Input } from '@angular/core';
import {Output, EventEmitter} from '@angular/core';
import {Joke} from './joke';

@Component({
selector: 'joke-form',
template: `
<div class="card card-block">
<h4 class="card-title">Create Joke</h4>
<div class="form-group">
<input type="text"
class="form-control"
placeholder="Enter the setup" [(ngModel)] = "setup">
</div>
<div class="form-group">
<input type="text"
class="form-control"
placeholder="Enter the punchline" [(ngModel)] = "punchline">
</div>
<button type="button"
class="btn btn-primary" (click)="createJoke(setup,punchline)">Create
</button>
</div>
`
})
export class JokeFormComponent {
    @Output('jokeCreated') jokeCreate  = new EventEmitter<Joke>();
    createJoke(setup : string,punchline : string) {
this.jokeCreate.emit(new Joke(setup, punchline));
}
}

